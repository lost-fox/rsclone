"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String },
    phone: { type: String },
    favoriteHotels: [{ type: String }],
    links: [{ type: mongoose_1.Types.ObjectId, ref: 'Link' }]
});
exports.default = (0, mongoose_1.model)('User', schema);
//# sourceMappingURL=User.js.map