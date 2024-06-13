// O'rnatishdan maqsad try-catch ga olmaslik asinxron kodlarni
// ushbu modul o'zi avtamatik try catch bilan ishlaydi
const asyncHandler = require('express-async-handler');

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  // JSON qiymat qaytarish
  res.status(200).json({ message: 'Get all contacts broo ))' });
});

//@desc Creata contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    console.log('bosh');
    res.status(400);
    throw new Error("Malumotlar bo'sh bo'lmasligi kerak!");
  }
  console.log(req.body);
  res.status(201).json({ message: 'Create contact' });
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Get contac for ${req.params.id}` });
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Update contac for ${req.params.id}` });
});

//@desc Delete contact
//@route DEL /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Delete contac for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
