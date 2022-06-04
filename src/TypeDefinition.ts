export type TaskType = {
    date: Date;
    content: string;
};

export type StateType = {
    text: string;
    taskList: TaskType[];
};
