import mongoose, {Schema} from "mongoose";

const snippetSchema = new Schema(
    {
        title: String,
        language: String,
        code: String
    },
    {
        timestamps: true
    }
)

const SnippetModel = mongoose.models.Snippets || mongoose.model('Snippets', snippetSchema);

export default SnippetModel;