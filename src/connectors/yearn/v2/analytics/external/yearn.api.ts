import { Chain } from '../../../../../utils/types/networks'
import { getData } from '../../../../../utils/external/utils'
import { getChainId } from '../../../../../utils/getChainId'
const pMap = require('p-map')

export function getVaultExtendedApiAddr (network: string) {
  const chainID = getChainId(network)
  return `https://ydaemon.yearn.finance/${chainID}/vaults/all?hideAlways=true&orderBy=apy.net_apy&orderDirection=desc&strategiesDetails=withDetails&strategiesRisk=withRisk&strategiesCondition=inQueue`
}

const availableChains = [Chain.arbitrum, Chain.ethereum, Chain.optimism]

export async function fetchVaults () {
  const vaults = await pMap(availableChains, async (chain) => {
    const apiURL = getVaultExtendedApiAddr(chain)
    return await getData(apiURL)
  })
  return vaults.flat()
}
