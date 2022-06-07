const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  // if (!name || !email || !password) {
  //   return res.status(400).json({ message: 'Please include all fields' })
  // }

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please include all fields')
  }

  res.send('Register Route')
})

const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route')
})

module.exports = {
  registerUser,
  loginUser,
}
