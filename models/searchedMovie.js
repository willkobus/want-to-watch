const mongoose = require("mongoose");

const Schema = mongoose.Schema;

module.exports = mongoose.model('searchedMovie', movieSchema)
// module.exports = {
//     movie
// }

// module.exports = User = mongoose.model('users', userSchema);
