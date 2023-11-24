import styled from 'styled-components' 
import keplr from '../../../assets/svg/Keplr.svg'
import leap from '../../../assets/svg/LeapWallet.svg'
import { ConnectKeplr } from '../../../connection/keplr'
import { useConnectKeplrWalletStore } from '../../../hooks/useConnectKeplrWalletStore'
import { useWallet } from '../../../hooks/useWallet'
import { InitSigner } from '../../../connection/stargate'
import { useClient } from '../../../hooks/useClient'
import { useBalancesStore } from '../../../hooks/useBalanceStore'
import { InitBalances } from '../../../connection/balances'

const ArrWallets = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
`

const WalletFields = styled.button`
    background-color: rgb(50,50,50);
    width: 225px;
    height: 225px;
    border: none;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
    color: white;
    cursor: pointer;
    outline:none;
    margin-top: 10px;
    justify-content: center;
`

const Img = styled.img`
    width: 170px;
    height: 170px;
    margin-top: 5px;
    margin-bottom: 5px;
`

const WalletsText = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const WalletsTextH3 = styled.h3`
    color: white;
    font-size: 18px;
    position: absolute;
    margin-top: 15em;
`

const WalletsTextH2Number = styled.h2` 
    color: white;
    margin-left: auto;
    margin-right: 26px;
`

const WalletsTextH5 = styled.h5`
   margin-top: -10px;
    color: grey;
`



export const ConnectWallets = () => {
    const [ connectWallet, setConnectWallet ] = useConnectKeplrWalletStore();
    const [ _, setClient ] = useClient();
    const [ wallet, setWallet ] = useWallet();
    const [ balances, setBalances ] = useBalancesStore();
    
    let ConnectKeplrHandler = async () => {
        let [connected, walletKeplr] = await ConnectKeplr()
        setConnectWallet({connected})
        setWallet({init: true, wallet: walletKeplr, type: "keplr"})
        
        let client = await InitSigner();
        setClient(client)

        let blns = await InitBalances(walletKeplr);
        setBalances(blns)
    }
    return(
        <ArrWallets>
            <WalletFields onClick={ConnectKeplrHandler}>
                <Img src={keplr}></Img>
                <WalletsTextH3>Keplr</WalletsTextH3>
            </WalletFields>
            <WalletFields>
                <Img src={leap}></Img>
                <WalletsTextH3>Leap</WalletsTextH3>
            </WalletFields>
        </ArrWallets>
    )
}