import { FC } from "react";
import styled from "styled-components";
type PropType = {
    content: string;
    deleteCard: React.MouseEventHandler<HTMLDivElement>;
};
const Wrapper = styled.div`
    border: 2px solid black;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
    font-size: 2rem;
    &:hover {
        background-color: bisque;
        cursor: pointer;
    }
`;
const Card: FC<PropType> = (props) => {
    return <Wrapper onClick={props.deleteCard}>{props.content}</Wrapper>;
};

export default Card;
