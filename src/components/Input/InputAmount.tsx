import styled from 'styled-components'

const FromInputAmount = styled.input`
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    text-align: right;
    color: rgb(220,220,220);
    font-size: 24px;
    margin-right: 8px;
    outline-width: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const InputAmount = () => {
    return(
        <FromInputAmount placeholder='0'></FromInputAmount>
    )
}