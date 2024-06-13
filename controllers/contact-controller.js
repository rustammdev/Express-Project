//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = async (req, res) => {
  // JSON qiymat qaytarish
  res.status(200).json({ message: 'Get all contacts broo ))' });
};

//@desc Creata contact
//@route POST /api/contacts
//@access public
const createContact = async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    console.log('bosh');
    res.status(400);
    throw new Error("Malumotlar bo'sh bo'lmasligi kerak!");
  }
  console.log(req.body);
  res.status(201).json({ message: 'Create contact' });
};

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = async (req, res) => {
  res
    .status(200)
    .json({ message: `Get contac for ${req.params.id}` });
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = async (req, res) => {
  res
    .status(200)
    .json({ message: `Update contac for ${req.params.id}` });
};

//@desc Delete contact
//@route DEL /api/contacts/:id
//@access public
const deleteContact = async (req, res) => {
  res
    .status(200)
    .json({ message: `Delete contac for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
