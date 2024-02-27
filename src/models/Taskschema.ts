import mongoose, {Document} from "mongoose";

export interface ITask extends Document {
    title: string;
    description: string;
    createdAt: Date;
}
const Taskschema= new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const Task = mongoose.model<ITask>('Task',Taskschema);

export default Task;