import { FC } from "react";
import styled from "styled-components";
import { StateType } from "../TypeDefinition";
type PropsType = {
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    state: StateType;
};
const STYLED_FORM = styled.form`
    text-align: center;
`;
const STYLED_INPUT = styled.input`
    vertical-align: middle;
    font-size: 1.5rem;
    padding: 0.3rem 0.5rem;
    border-radius: 0.5rem;
    margin-right: 0.2rem;
`;
const STYLED_BUTTON = styled.button`
    background-color: white;
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    vertical-align: middle;
    &:hover {
        background-color: bisque;
        cursor: pointer;
    }
`;
const Form: FC<PropsType> = (props) => {
    return (
        <STYLED_FORM onSubmit={props.handleSubmit}>
            <STYLED_INPUT
                type="text"
                value={props.state.text}
                onChange={props.handleChange}
                autoFocus={true}
            />
            <STYLED_BUTTON type="submit">ADD</STYLED_BUTTON>
        </STYLED_FORM>
    );
};

export default Form;
