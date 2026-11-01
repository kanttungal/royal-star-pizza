import { BUSINESS_CONFIG } from '../config/business';

/**
 * Generates the WhatsApp order message and returns the click-to-chat link.
 * @param {Array} cartItems - items in the cart
 * @param {Object} customerInfo - optional customer name, phone, order type, and notes
 * @returns {string} wa.me URL
 */
export function generateWhatsAppOrderUrl(cartItems, customerInfo = {}) {
  if (!cartItems || cartItems.length === 0) {
    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`;
  }

  const { name, phone, orderType = 'Takeaway', notes } = customerInfo;

  let message = `Hello ${BUSINESS_CONFIG.name}!\n\n`;
  message += `I would like to place an order.\n\n`;
  message += `📋 *ORDER DETAILS:*\n`;
  message += `----------------------------\n`;

  let totalItemsCount = 0;
  let grandTotal = 0;

  cartItems.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    totalItemsCount += item.quantity;
    grandTotal += itemTotal;

    const sizeText = item.selectedSizeName ? ` (${item.selectedSizeName})` : '';
    message += `${index + 1}. *${item.name}*${sizeText} × ${item.quantity}\n`;
    message += `   ₹${item.price} × ${item.quantity} = ₹${itemTotal}\n\n`;
  });

  message += `----------------------------\n`;
  message += `*Total Items:* ${totalItemsCount}\n`;
  message += `*Grand Total:* ₹${grandTotal}\n\n`;

  // Customer information if provided voluntarily
  if (name || phone || notes || orderType) {
    message += `👤 *CUSTOMER DETAILS:*\n`;
    if (name && name.trim()) {
      message += `• Name: ${name.trim()}\n`;
    }
    if (phone && phone.trim()) {
      message += `• Contact Phone: ${phone.trim()}\n`;
    }
    if (orderType) {
      message += `• Order Type: ${orderType}\n`;
    }
    if (notes && notes.trim()) {
      message += `• Special Instructions: ${notes.trim()}\n`;
    }
    message += `\n`;
  }

  message += `Please confirm availability and my order.\n`;
  message += `Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodedMessage}`;
}

