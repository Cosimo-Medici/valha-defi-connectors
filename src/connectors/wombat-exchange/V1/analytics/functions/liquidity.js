/* eslint-disable @typescript-eslint/no-var-requires */
const { getNodeProvider } = require('src/utils/getNodeProvider');
const ethers = require('ethers');
const LPTokenABI = require('../../abi/LP.json');
const { erc20Decimals } = require('src/utils/ERC20Decimals');

async function checkWombatV1Liquidity(chain, poolAddress) {
  try {
    const provider = await getNodeProvider(chain);
    if (!provider) throw new Error('No provider was found.');
    const POOL = new ethers.Contract(poolAddress, LPTokenABI, provider);
    const liquidityBN = await POOL.cash();
    const decimals = await erc20Decimals(provider, poolAddress);
    const liquidity = liquidityBN / 10 ** decimals;
    return { data: liquidity, err: null };
  } catch (err) {
    console.log(err);
    return { data: null, err: err };
  }
}

module.exports = checkWombatV1Liquidity;
