# indian-pincode-validator

A lightweight and efficient Node.js module to **validate Indian PIN codes** and **fetch detailed address information** using the official [Postal Pincode API](https://api.postalpincode.in/).  
Perfect for applications requiring address validation or user input verification in Indian geography.

---

## 📦 Installation

```bash
npm install indian-pincode-details

```
## 🚀 Example

```bash
const validatePIN = require('indian-pincode-details');

(async () => {
  const result = await validatePIN('110001');
  console.log(result);
})();
```

```bash
{
  "Pincode": "110001",
  "PostOffice": "Sansad Marg",
  "District": "Central Delhi",
  "State": "Delhi",
  "Country": "India"
}
```