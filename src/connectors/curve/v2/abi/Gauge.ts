export const GaugeABI = [
  {
    name: 'Deposit',
    inputs: [
      { type: 'address', name: 'provider', indexed: true },
      { type: 'uint256', name: 'value', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'Withdraw',
    inputs: [
      { type: 'address', name: 'provider', indexed: true },
      { type: 'uint256', name: 'value', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'UpdateLiquidityLimit',
    inputs: [
      { type: 'address', name: 'user', indexed: false },
      { type: 'uint256', name: 'original_balance', indexed: false },
      { type: 'uint256', name: 'original_supply', indexed: false },
      { type: 'uint256', name: 'working_balance', indexed: false },
      { type: 'uint256', name: 'working_supply', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    outputs: [],
    inputs: [
      { type: 'address', name: 'lp_addr' },
      { type: 'address', name: '_minter' },
      { type: 'address', name: '_reward_contract' },
      { type: 'address', name: '_rewarded_token' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    name: 'user_checkpoint',
    outputs: [{ type: 'bool', name: '' }],
    inputs: [{ type: 'address', name: 'addr' }],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 2311984
  },
  {
    name: 'claimable_tokens',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'address', name: 'addr' }],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 2231138
  },
  {
    name: 'claimable_reward',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'address', name: 'addr' }],
    stateMutability: 'view',
    type: 'function',
    gas: 7300
  },
  {
    name: 'kick',
    outputs: [],
    inputs: [{ type: 'address', name: 'addr' }],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 2317383
  },
  {
    name: 'set_approve_deposit',
    outputs: [],
    inputs: [
      { type: 'address', name: 'addr' },
      { type: 'bool', name: 'can_deposit' }
    ],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 35826
  },
  {
    name: 'deposit',
    outputs: [],
    inputs: [{ type: 'uint256', name: '_value' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    name: 'deposit',
    outputs: [],
    inputs: [
      { type: 'uint256', name: '_value' },
      { type: 'address', name: 'addr' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    name: 'withdraw',
    outputs: [],
    inputs: [{ type: 'uint256', name: '_value' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    name: 'withdraw',
    outputs: [],
    inputs: [
      { type: 'uint256', name: '_value' },
      { type: 'bool', name: 'claim_rewards' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    name: 'claim_rewards',
    outputs: [],
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    name: 'claim_rewards',
    outputs: [],
    inputs: [{ type: 'address', name: 'addr' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    name: 'integrate_checkpoint',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 2387
  },
  {
    name: 'minter',
    outputs: [{ type: 'address', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1511
  },
  {
    name: 'crv_token',
    outputs: [{ type: 'address', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1541
  },
  {
    name: 'lp_token',
    outputs: [{ type: 'address', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1571
  },
  {
    name: 'controller',
    outputs: [{ type: 'address', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1601
  },
  {
    name: 'voting_escrow',
    outputs: [{ type: 'address', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1631
  },
  {
    name: 'balanceOf',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'address', name: 'arg0' }],
    stateMutability: 'view',
    type: 'function',
    gas: 1815
  },
  {
    name: 'totalSupply',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1691
  },
  {
    name: 'future_epoch_time',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1721
  },
  {
    name: 'approved_to_deposit',
    outputs: [{ type: 'bool', name: '' }],
    inputs: [
      { type: 'address', name: 'arg0' },
      { type: 'address', name: 'arg1' }
    ],
    stateMutability: 'view',
    type: 'function',
    gas: 2059
  },
  {
    name: 'working_balances',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'address', name: 'arg0' }],
    stateMutability: 'view',
    type: 'function',
    gas: 1935
  },
  {
    name: 'working_supply',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1811
  },
  {
    name: 'period',
    outputs: [{ type: 'int128', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1841
  },
  {
    name: 'period_timestamp',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'uint256', name: 'arg0' }],
    stateMutability: 'view',
    type: 'function',
    gas: 1980
  },
  {
    name: 'integrate_inv_supply',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'uint256', name: 'arg0' }],
    stateMutability: 'view',
    type: 'function',
    gas: 2010
  },
  {
    name: 'integrate_inv_supply_of',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'address', name: 'arg0' }],
    stateMutability: 'view',
    type: 'function',
    gas: 2085
  },
  {
    name: 'integrate_checkpoint_of',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'address', name: 'arg0' }],
    stateMutability: 'view',
    type: 'function',
    gas: 2115
  },
  {
    name: 'integrate_fraction',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'address', name: 'arg0' }],
    stateMutability: 'view',
    type: 'function',
    gas: 2145
  },
  {
    name: 'inflation_rate',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 2021
  },
  {
    name: 'reward_contract',
    outputs: [{ type: 'address', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 2051
  },
  {
    name: 'rewarded_token',
    outputs: [{ type: 'address', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 2081
  },
  {
    name: 'reward_integral',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 2111
  },
  {
    name: 'reward_integral_for',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'address', name: 'arg0' }],
    stateMutability: 'view',
    type: 'function',
    gas: 2295
  },
  {
    name: 'rewards_for',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'address', name: 'arg0' }],
    stateMutability: 'view',
    type: 'function',
    gas: 2325
  },
  {
    name: 'claimed_rewards_for',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'address', name: 'arg0' }],
    stateMutability: 'view',
    type: 'function',
    gas: 2355
  }
]
