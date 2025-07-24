const axios = require('axios');

/**
 * Validates and fetches address info for an Indian PIN code.
 * @param {string|number} pincode - A 6-digit Indian PIN code.
 * @returns {Promise<object>} - Address info or error message.
 */
async function validatePIN(pincode) {
  if (!/^\d{6}$/.test(pincode)) {
    return { error: "Invalid PIN Code format. Must be 6 digits." };
  }

  try {
    const res = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
    const data = res.data[0];

    if (data.Status === "Success" && data.PostOffice && data.PostOffice.length > 0) {
      return {
        Pincode: pincode,
        PostOffice: data.PostOffice[0].Name,
        District: data.PostOffice[0].District,
        State: data.PostOffice[0].State,
        Country: data.PostOffice[0].Country
      };
    } else {
      return { error: "PIN code not found." };
    }
  } catch (err) {
    return { error: "API error or invalid request." };
  }
}

module.exports = validatePIN;
