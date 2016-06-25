'use strict';

import mongoose from 'mongoose';

var ProfileSchema = new mongoose.Schema({
  title: String,
  gender: String
  


});


export default mongoose.model('Profile', ProfileSchema);
