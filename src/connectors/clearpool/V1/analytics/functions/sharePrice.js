/* eslint-disable @typescript-eslint/no-var-requires */
const { getNodeProvider } = require('src/utils/getNodeProvider');
const ethers = require('ethers');
const PoolTokenABI = require('../../abi/PoolToken.json');

async function checkClearpoolV1Share(chain, poolAddress) {
  try {
    const provider = await getNodeProvider(chain);
    if (!provider) throw new Error('No provider was found.');
    const POOL = new ethers.Contract(poolAddress, PoolTokenABI, provider);
    const SharePriceBN = await POOL.getCurrentExchangeRate();
    const decimals = 18;
    const sharePrice = SharePriceBN / 10 ** decimals;
    return { data: sharePrice, err: null };
  } catch (err) {
    console.log(err);
    return { data: null, err: err };
  }
}

module.exports = checkClearpoolV1Share;
