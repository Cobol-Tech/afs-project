import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    ChatUsers: {
      type: Array,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
    Sender: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
