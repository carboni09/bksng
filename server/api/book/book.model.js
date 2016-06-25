'use strict';

import mongoose from 'mongoose';

var BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  publisher: String
});

export default mongoose.model('Book', BookSchema);
