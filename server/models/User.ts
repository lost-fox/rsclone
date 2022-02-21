import { model, Schema, Types } from "mongoose";

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  surname: {type: String},
  phone: {type: String},
  favoriteHotels: [{type: String}],
  links: [{type: Types.ObjectId, ref:'Link'}]
})

export default model('User', schema);