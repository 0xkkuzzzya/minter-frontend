import styled from 'styled-components' 
import qube from '../../assets/QubeLogo.jpg'
import atom from '../../assets/svg/AtomLogo.svg'
import { TOKEN_INFO_COLLATERAL, TOKEN_INFO_QASSET } from '../../constants';

const Arrtokens = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-top: 2px solid black;
`

const TokenFields = styled.button`
    background-color: transparent;
    border: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
    color: white;
    cursor: pointer;
`

const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 26px;
`

const TokensText = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const TokensTextH3 = styled.h3`
    margin-top: 15px;
    color: white;
`

const TokensTextH2Number = styled.h2` 
    color: white;
    margin-left: auto;
    margin-right: 26px;
`

const TokensTextH5 = styled.h5`
   margin-top: -10px;
    color: grey;
`

export const TokensCollateral = () => {
    const tokens = TOKEN_INFO_COLLATERAL.map((token) => 
        <TokenFields>
            <Img src={token.Logo}></Img>
            <TokensText>
                <TokensTextH3>{token.Base}</TokensTextH3>
                <TokensTextH5>{token.Network}</TokensTextH5>
            </TokensText>
            <TokensTextH2Number>0</TokensTextH2Number>
        </TokenFields>       
    )
    return(
        <Arrtokens>
            {tokens}
        </Arrtokens>
    )
}

export const TokensQAsset = () => {
    const tokens = TOKEN_INFO_QASSET.map((token) => 
        <TokenFields>
            <Img src={token.Logo}></Img>
            <TokensText>
                <TokensTextH3>{token.Base}</TokensTextH3>
                <TokensTextH5>{token.Network}</TokensTextH5>
            </TokensText>
            <TokensTextH2Number>0</TokensTextH2Number>
        </TokenFields>       
    )
    return(
        <Arrtokens>
            {tokens}
        </Arrtokens>
    )
}