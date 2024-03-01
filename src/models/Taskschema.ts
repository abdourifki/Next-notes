import mongoose from "mongoose";

export interface ITask {
    title: string;
    description: string;
    createdAt: Date;
}
const Taskschema= new mongoose.Schema<ITask>({
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
    
},

)
const Task = mongoose.models.Task|| mongoose.model<ITask>('Task',Taskschema);

export default Task;