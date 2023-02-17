import { type BigNumber, type BigNumberish, Contract } from 'ethers'
import { type GetQuotePriceFunction } from '../../../../../utils/types/quotePrice'
import { getNodeProvider } from '../../../../../utils/getNodeProvider'
import UniswapV2RouterAbi from './../../abi/uniswapv2-router.json'
import { Pool } from 'src/utils/types/connector-types'

const SWAP_ROUTE_CONTRACT = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

export const getQuotePrice: GetQuotePriceFunction = async (
  tokenIn: string,
  amount: BigNumberish,
  tokenOut: string,
  chain: string
): Promise<BigNumber> => {
  if (chain != 'ethereum') {
    throw 'Uniswap v2 not available outside of ethereum'
  }

  const provider = getNodeProvider(chain)
  const swapRouterContract = new Contract(
    SWAP_ROUTE_CONTRACT,
    UniswapV2RouterAbi,
    provider
  )

  return swapRouterContract
    .getAmountsOut(amount, [tokenIn, tokenOut])
    .then((response) => response[1])
}
