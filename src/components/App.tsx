import React, { FC, useState } from "react";
import { StateType, TaskType } from "../TypeDefinition";
import Card from "./Card";
import Form from "./Form";

const initialState = {
    text: "",
    taskList: [],
};
const App: FC = () => {
    const [state, setState] = useState<StateType>(initialState);
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
        event
    ): void => {
        event.preventDefault();
        if (state.text === "") {
            return;
        }
        const new_task = {
            date: new Date(),
            content: state.text,
        };
        setState({ text: "", taskList: [new_task, ...state.taskList] });
    };
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ): void => {
        const new_text = event.target.value;
        setState({ ...state, text: new_text });
    };
    const deleteCard = (task_to_delete: TaskType): void => {
        const isOK = confirm(`${task_to_delete.content}を削除しますか？`);
        if (!isOK) return;
        setState({
            ...state,
            taskList: state.taskList.filter(
                (task: TaskType) => task !== task_to_delete
            ),
        });
    };
    return (
        <div>
            <Form
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                state={state}
            ></Form>
            <div>
                {state.taskList.map((task: TaskType, index: number) => {
                    return (
                        <Card
                            key={index}
                            content={task.content}
                            deleteCard={() => deleteCard(task)}
                        ></Card>
                    );
                })}
            </div>
        </div>
    );
};

export default App;
