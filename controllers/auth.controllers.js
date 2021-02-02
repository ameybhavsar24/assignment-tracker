const User = require('../models/User.model');
const asyncHandler = require('../middleware/async.middleware');
// @route   POST /api/auth/register
// @desc    Register user
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
	const user = await User.create(req.body);
	res.status(200).json({ success: true, user });
});
