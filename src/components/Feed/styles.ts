import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MenuOptions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .selected {
        color: var(--twitter);
        border-bottom: 2px solid var(--twitter);
    }
`;

export const Tab = styled.div`
    margin-top: 10px;
    padding: 11px 0 15px;
    text-align: center;

    font-weight: bold;
    font-size: 15px;

    outline: 0;
    cursor: pointer;

    color: var(--gray);

    border-bottom: 1px solid var(--outline);

    &:hover {
        background: var(--twitter-dark-hover);
    }
`;


export const Tweets = styled.div`
    display: flex;
    flex-direction: column;

    flex-shrink: 0;
`;
