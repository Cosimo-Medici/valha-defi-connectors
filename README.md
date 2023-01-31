<div>
  <div align="center">
    <h1>Valha  </h1>
    <h2> DeFi Abstraction Connectors </h2>
    <img src="https://i.imgur.com/1jNxqt8.png" height="136" width="482">
    <br />
    <br />
    <a href="https://github.com/Valha-xyz/valha-defi-connectors/issues/new?assignees=&labels=bug&title=bug%3A+">Report a Bug</a>
    -
    <a href="https://github.com/Valha-xyz/valha-defi-connectors/issues/new?assignees=&labels=enhancement&title=feature%3A+">Request a Feature</a>
  </div>
  <details>
  <summary>Table of Contents</summary>

- [About](#about)
- [Use-cases](#why)
- [Integrate a new Protocol](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Integration steps](#🚀-add-a-new-protocol)
- [Expected Return](#interface)
- [Example](#erc4626-example)
- [Advice](#advice)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements-)
- [Support](#support)
- [Assistance](#project-assistance)

  </details>
</div>

<div align="center">
<br />
</div>

![Test Status](https://github.com/Valha-xyz/valha-defi-connectors/actions/workflows/test.yml/badge.svg)

<!-- ![Build Status](https://github.com/Valha-xyz/valha-defi-connectors/actions/workflows/file_check.yml/badge.svg) -->

---

## About

<div>
  <div align="center">
      <h1> Valha helps applications to access DeFi protocols by standardizing common interactions. </h1> 
  </div>
  <br>
  <div>
    More information in <a href="https://medium.com/@octavionotpunk/introducing-valha-the-defi-abstraction-layer-7303252423d3" target="_blank"> this article </a>
  </div>
</div>

## Why integrate on Valha?

### Protocols 🏗️🏗️🏗️

As a DeFi protocol, you can leverage your exposure to third-party distributors (wallets, dapps, investment platforms) by standardizing the access to your pools. It will reduce the time needed by these actors to integrate you whoever you are and therefore help you grow your number of users and TVL.

### DeFi Apps 💻💻💻

As a DeFi app (wallets, dapps, yield aggregators), you can easily integrate new DeFi protocols by exploring the connectors made by protocols. By integrating the DeFi ecosystem directly in your interface, users won't have to hop from interface to interface. It will improve their experience and reduce their probability of being hacked.

<br>

## Getting Started

To integrate a new DeFi protocol to Valha, you just have to follow the next few steps!

### Prerequisites

<a href="https://nodejs.org/en/download/" target="_blank"> Node</a>

  <!-- <br> or <br>
<!-- - <a href="https://docs.docker.com/get-docker/" target="_blank"> Docker </a> -->

### Add a new protocol 🚀

<h3>0. Make sure you have Node installed </h3>

```bash
node -v
```

<br />
<h3>1. Fork this repository </h3>

Click on the "Fork" button on the top right-hand corner of your screen.

<br />
<h3>2. Run "npm install" to install all the dependencies </h3>

```bash
npm install
```

<br />
<h3>3. Create a new folder in the folder SRC/CONNECTORS with your PROTOCOL_NAME and a folder with PRODUCT/VERSION of this integration </h3>

```bash
npm run create-connector -- --connector="protocol_name/product_version"
```

Your connector folder must respect the following structure to pass tests:

```bash
├── connectors
│ ├── name_of_your_protocol
│ │ ├── product_version_1
│ │ │  ├── abi
│ │ │  │  ├── Pool.json
│ │ │  │  ├── LP.json
│ │ │  ├── analytics
│ │ │  │  ├── index.js/ts
│ │ │  ├── interactions
│ │ │  │  ├── index.js/ts
│ │ │  ├── pools
│ │ │  │  ├── pools.js/ts
```

<br />
<h3>4. Develop your integration using JS or TS </h3>

🚨 Make sure your pools.js, analytics/index.js and interactions/index.js respect the expected EXPORT 🚨

🤞 Check src/connectors or the INTERFACE section below

<h3>5. Make sure your integration works by running the TEST suites. </h3>

Test only your repository structure with:

```bash
npm run test-repository -- --connector="protocol_name/product_version"
```

Test only your analytics integration with:

```bash
npm run test-analytics -- --connector="protocol_name/product_version"
```

Test only your interaction integration with:

```bash
npm run test-interactions -- --connector="protocol_name/product_version"
```

Use the following command to run all the tests at once:

```bash
npm run full-test -- --connector="protocol_name/product_version"
```

🚨 If you have too many pools to test, you can make sure that your integration is working on a specific pool by using:

```bash
npm run full-test -- --connector="protocol_name/product_version" --pool="pool_address"
```

<br />
<h3> 6. Make your integration live by submitting a PR to the STAGING branch 🎉🎉🎉 </h3>

Keep in mind to "compare across forks" in the [pull request creation page](https://github.com/Valha-xyz/valha-defi-connectors/compare) to make your fork appears.

🚨🚨🚨 Make sure the TITLE of your PR is your "protocol_name/product_version" to pass CI/CD 🚨🚨🚨

<br />
<h3>7. Now, just enjoy as you make DeFi easier for everyone 🍹🍹🍹 </h3>

<br />

## Interface

<h3>Expected EXPORT for pools.js </h3>

```typescript
interface Pool {
  name: string;
  chain: string;
  underlying_tokens: string[];
  pool_address: string;
  investing_address: string;
  staking_address: string;
  boosting_address: string;
  distributor_address: string;
  rewards_tokens: string;
  metadata: object;
}
```

<br />
<h3>Expected EXPORT for analytics/index.js </h3>

```typescript
interface Analytics {
  status: bool | null; // boolean that specify if a pool is open (true) or closed (false).
  tvl: number | null; // TVL value in USD. Value that is invested in the pool (whatever the current use).
  liquidity: number | null; // Liquidity value in USD. Value that is available to withdraw from the pool.
  outloans: number | null; // Outloans value in USD. Value that is currently used by users of the protocols.
  losses: number | null; // Losses value in USD. Value that is currently lost by the protocol (credit default, slashing events, bad debt, etc...).
  capacity: number | null; // Capacity value in USD. Value that the pool can take.
  apy: number | null; // Rate you can earn on an account over a year by putting money into the pool. Sum of Activity APY + Rewards APY.
  activity_apy: number | null; // Rate you can earn on an account over a year by putting money into the pool coming from economics of the protocol.
  rewards_apy: number | null; // Rate you can earn on an account over a year by putting money into the pool coming from incentives of the protocol (liquidity mining).
  boosting_apy: number | null; // Rate you can earn on an account over a year by putting money into the pool coming from specific action in the protocol.
  share_price: number | null; // Price to get one share of the pool in USD. Value that must be deposited in the pool to get 1 pool token.
  minimum_deposit: number | null; // Minimum deposit in USD. Minimum amount that must be sent in one deposit transaction.
  maximum_deposit: number | null; // Maximum deposit in USD. Maximum amount that must be sent in one deposit transaction.
}
```

<br />
<h3>Expected EXPORT for interactions/index.js </h3>

```typescript
interface Interactions {
  deposit: deposit() | null;
  deposit_and_stake: deposit_and_stake() | null;
  unlock: unlock() | null;
  redeem: redeem() | null;
  stake: stake() | null;
  unstake: unstake() | null;
  boost: boost() | null;
  unboost: unboost() | null;
  claim_rewards: claimRewards() | null;
  claim_interests: claimInterests() | null;
}
```

<h3>Expected Return Object for interactions/index.js FUNCTION </h3>

```typescript
interface InteractionsReturnObject {
  abi: EVMAbi; // JSON file that represent a contract ABI
  method_name: string; // method to interact with the pool
  position_token: string; // token needed to approve
  position_token_type: 'ERC-20' | 'ERC-721' | 'CUSTOM'; // token type to approve
  interaction_address: string; // contract to interact with to interact with poolAddress
  amount: string; // amount that will be use in the ERC20 approve tx of the position token if it is an ERC20 or that will be use as the 'value' of the transaction
  args: string[]; // arguments to pass to the smart contracts to trigger 'method_name'
}
```

<br />

## ERC4626 Example

Let's consider that we are creating the connector for the v5 of the Valha protocol that call "valha/v5", we would run the following script to create the repositories:

```bash
npm run create-connector -- --connector="valha/v5"
```

### ABI - Example

We would add the ERC4626 ABI to a file name "erc4626.json" in the "valha/v5/abi/erc4626.json' repository.

### Analytics - Example

```javascript
/*
    DOCUMENTATION EXAMPLE to give more context about the integration work.

    Definitely need more testing and improvement.

    --> A CLI script will be developed to automatically generate ERC4626 connector
*/

const ERC4626ABI = require('../abi/ERC4626.json');
const { getNodeProvider } = require('src/utils/getNodeProvider');
const ethers = require('ethers');

async function getStatus(chain, pool_address) {
  return true;
}

async function getAPY(chain, pool_address) {
  const activity_apy = 2.5;
  const rewards_apy = 2.5;
  return { activity_apy: activity_apy, rewards_apy: rewards_apy };
}

async function getTotalAssets(POOL) {
  const decimals = await POOL.decimals();
  const TotalAssets = await POOL.totalAssets();
  return TotalAssets / 10 ** decimals;
}

async function getSharePrice(POOL) {
  const TotalAssets = await POOL.totalAssets();
  const TotalSupply = await POOL.totalSupply();
  return TotalAssets / TotalSupply;
}

async function analytics(chain, poolAddress) {
  const provider = await getNodeProvider(chain);
  if (!provider) throw new Error('No provider was found.');
  const POOL = new ethers.Contract(poolAddress, ERC4626ABI, provider);
  const TVL = await getTotalAssets(POOL);
  const status = await getStatus(POOL);
  const { activity_apy, rewards_apy } = await getAPY(chain, poolAddress);
  const sharePrice = await getSharePrice(chain, poolAddress);

  const result = {
    status: status,
    tvl: TVL,
    liquidity: TVL,
    outloans: null,
    losses: null,
    capacity: 10_000_000,
    apy: activity_apy + rewards_apy,
    activity_apy: activity_apy,
    rewards_apy: rewards_apy,
    boosting_apy: 0,
    share_price: sharePrice,
    minimum_deposit: null,
    maximum_deposit: null,
  };

  return result;
}

module.exports = {
  main: analytics,
  url: 'https://app.test.xyz',
};
```

### Interactions - Example

```javascript
/* 
    DOCUMENTATION EXAMPLE to give more context about the integration work.
    
    Definitely need more testing and improvement.

    --> A CLI script will be developed to automatically generate ERC4626 connector
*/
const ERC4626ABI = require('../abi/ERC4626.json');

/// invest
async function deposit(
  pool_name,
  chain,
  underlying_tokens,
  pool_address,
  investing_address,
  staking_address,
  boosting_address,
  distributor_address,
  rewards_tokens,
  metadata,
  amountNotBN,
  amountsDesiredNotBN,
  amountsMinimumNotBN,
  ranges,
  rangeToken,
  userAddress,
  receiverAddress,
  lockupTimestamp,
  deadline
) {
  const abi = ERC4626ABI;
  const method_name = 'deposit';
  const position_token = underlying_tokens[0];
  const amountBN = await toBnERC20Decimals(amountNotBN, chain, position_token);
  const args = [amountBN, receiverAddress];
  const interaction_address = investing_address;

  return {
    abi: abi, //json file name
    method_name: method_name, //method to interact with the pool
    position_token: position_token, // token needed to approve
    position_token_type: 'ERC-20', //token type to approve
    interaction_address: interaction_address, // contract to interact with to interact with poolAddress
    amount: amountBN, //amount that will be use in the ERC20 approve tx of the position token is an ERC20 or that will be use as the 'value' of the transaction
    args: args, //args to pass to the smart contracts to trigger 'method_name'
  };
}

/// redeem
async function redeem(
  pool_name,
  chain,
  underlying_tokens,
  pool_address,
  investing_address,
  staking_address,
  boosting_address,
  distributor_address,
  rewards_tokens,
  metadata,
  amountNotBN,
  amountsDesiredNotBN,
  amountsMinimumNotBN,
  ranges,
  rangeToken,
  userAddress,
  receiverAddress,
  lockupTimestamp,
  deadline
) {
  const abi = ERC4626ABI;
  const method_name = 'redeem';
  const position_token = underlying_tokens[0];
  const amountBN = await toBnERC20Decimals(amountNotBN, chain, position_token);
  const args = [amountBN, receiverAddress, userAddress];
  const interaction_address = investing_address;

  return {
    abi: abi, //json file name
    method_name: method_name, //method to interact with the pool
    position_token: pool_address, // token needed to approve
    position_token_type: 'ERC-20', //token type to approve
    interaction_address: interaction_address, // contract to interact with to interact with poolAddress
    amount: amountBN, //amount that will be use in the ERC20 approve tx of the position token is an ERC20 or that will be use as the 'value' of the transaction
    args: args, //args to pass to the smart contracts to trigger 'method_name'
  };
}

module.exports = {
  deposit: deposit,
  deposit_and_stake: null,
  unlock: null,
  redeem: redeem,
  stake: null,
  unstake: null,
  boost: null,
  unboost: null,
  claim_rewards: null,
  claim_interests: null,
};
```

## Advice

### Analytics 🔍

Try to always get information from the chain, not from an API. It will increase confidence in your protocol and simplify understanding for analysts.

### Interactions 🏎️

Try to get the interactions functions fast. It will improve the performance of apps using them.

## Contributing 🤝🤝🤝

We often list improvement issues that anyone can work on, so feel free to check the [issues](https://github.com/Valha-xyz/valha-defi-connectors/issues) if you don't know where to start.

Feel free to reach out in the [#developers channel](https://discord.gg/juKsubzTeU) of our Discord Server if you need any help!

## Acknowledgements 📚📚📚

<div>
  Valha's connectors and development philosophy are heavily inspired by the impressive work done by the <a href="https://defillama.com/" target="_blank"> DefiLlama </a> team, its community and the way the product has developed.
  <br/>
  <br/>
  We believe that open and collaborative contribution is one of the greatest catalysts for composability in decentralised finance. There are many ways to make the DeFi ecosystem more transparent, understandable and operable. We hope to make Valha part of this mission.
</div>

## Support

Reach out to the team at one of the following places:

- Create an [issue](https://github.com/Valha-xyz/valha-defi-connectors/issues/new?assignees=&labels=enhancement&title=support%3A+)
- Contact [Octavio](https://twitter.com/OctavioNotPunk)
- Ask information on our [Discord](https://discord.gg/juKsubzTeU)

## Project assistance

If you want to say **thank you** or/and support active development of Valha:

- Tweet about Valha
- Write interesting articles about the project on [Medium](https://medium.com/) or [Mirror](https://mirror.xyz/)
- Add a [GitHub Star](https://github.com/Valha-xyz/valha-defi-connectors) to the project.
- [DM Octavio](https://twitter.com/OctavioNotPunk) to give your feedback
- [Request](https://github.com/Valha-xyz/valha-defi-connectors/issues/new?assignees=&labels=enhancement&title=feature%3A+) a new feature so we better answer your needs

<br />
Together, we can make DeFi easier!

Valha is still a work in progress, please do not hesitate to provide feedbacks.
