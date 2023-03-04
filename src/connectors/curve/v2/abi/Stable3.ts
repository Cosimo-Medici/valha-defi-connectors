export const StableABI3 = [
  {
    name: 'TokenExchange',
    inputs: [
      { type: 'address', name: 'buyer', indexed: true },
      { type: 'int128', name: 'sold_id', indexed: false },
      { type: 'uint256', name: 'tokens_sold', indexed: false },
      { type: 'int128', name: 'bought_id', indexed: false },
      { type: 'uint256', name: 'tokens_bought', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'AddLiquidity',
    inputs: [
      { type: 'address', name: 'provider', indexed: true },
      { type: 'uint256[3]', name: 'token_amounts', indexed: false },
      { type: 'uint256[3]', name: 'fees', indexed: false },
      { type: 'uint256', name: 'invariant', indexed: false },
      { type: 'uint256', name: 'token_supply', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'RemoveLiquidity',
    inputs: [
      { type: 'address', name: 'provider', indexed: true },
      { type: 'uint256[3]', name: 'token_amounts', indexed: false },
      { type: 'uint256[3]', name: 'fees', indexed: false },
      { type: 'uint256', name: 'token_supply', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'RemoveLiquidityOne',
    inputs: [
      { type: 'address', name: 'provider', indexed: true },
      { type: 'uint256', name: 'token_amount', indexed: false },
      { type: 'uint256', name: 'coin_amount', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'RemoveLiquidityImbalance',
    inputs: [
      { type: 'address', name: 'provider', indexed: true },
      { type: 'uint256[3]', name: 'token_amounts', indexed: false },
      { type: 'uint256[3]', name: 'fees', indexed: false },
      { type: 'uint256', name: 'invariant', indexed: false },
      { type: 'uint256', name: 'token_supply', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'CommitNewAdmin',
    inputs: [
      { type: 'uint256', name: 'deadline', indexed: true, unit: 'sec' },
      { type: 'address', name: 'admin', indexed: true }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'NewAdmin',
    inputs: [{ type: 'address', name: 'admin', indexed: true }],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'CommitNewFee',
    inputs: [
      { type: 'uint256', name: 'deadline', indexed: true, unit: 'sec' },
      { type: 'uint256', name: 'fee', indexed: false },
      { type: 'uint256', name: 'admin_fee', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'NewFee',
    inputs: [
      { type: 'uint256', name: 'fee', indexed: false },
      { type: 'uint256', name: 'admin_fee', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'RampA',
    inputs: [
      { type: 'uint256', name: 'old_A', indexed: false },
      { type: 'uint256', name: 'new_A', indexed: false },
      {
        type: 'uint256',
        name: 'initial_time',
        indexed: false,
        unit: 'sec'
      },
      {
        type: 'uint256',
        name: 'future_time',
        indexed: false,
        unit: 'sec'
      }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'StopRampA',
    inputs: [
      { type: 'uint256', name: 'A', indexed: false },
      { type: 'uint256', name: 't', indexed: false, unit: 'sec' }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    outputs: [],
    inputs: [
      { type: 'address[3]', name: '_coins' },
      { type: 'address', name: '_pool_token' },
      { type: 'uint256', name: '_A' },
      { type: 'uint256', name: '_fee' }
    ],
    constant: false,
    payable: false,
    type: 'constructor'
  },
  {
    name: 'A',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 5227
  },
  {
    name: 'get_virtual_price',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 1150488
  },
  {
    name: 'calc_token_amount',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [
      { type: 'uint256[3]', name: 'amounts' },
      { type: 'bool', name: 'deposit' }
    ],
    constant: true,
    payable: false,
    type: 'function',
    gas: 4526955
  },
  {
    name: 'add_liquidity',
    outputs: [],
    inputs: [
      { type: 'uint256[3]', name: 'amounts' },
      { type: 'uint256', name: 'min_mint_amount' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 6972762
  },
  {
    name: 'get_dy',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [
      { type: 'int128', name: 'i' },
      { type: 'int128', name: 'j' },
      { type: 'uint256', name: 'dx' }
    ],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2687932
  },
  {
    name: 'get_dy_underlying',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [
      { type: 'int128', name: 'i' },
      { type: 'int128', name: 'j' },
      { type: 'uint256', name: 'dx' }
    ],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2687745
  },
  {
    name: 'exchange',
    outputs: [],
    inputs: [
      { type: 'int128', name: 'i' },
      { type: 'int128', name: 'j' },
      { type: 'uint256', name: 'dx' },
      { type: 'uint256', name: 'min_dy' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 5499133
  },
  {
    name: 'remove_liquidity',
    outputs: [],
    inputs: [
      { type: 'uint256', name: '_amount' },
      { type: 'uint256[3]', name: 'min_amounts' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 196975
  },
  {
    name: 'remove_liquidity_imbalance',
    outputs: [],
    inputs: [
      { type: 'uint256[3]', name: 'amounts' },
      { type: 'uint256', name: 'max_burn_amount' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 6972281
  },
  {
    name: 'calc_withdraw_one_coin',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [
      { type: 'uint256', name: '_token_amount' },
      { type: 'int128', name: 'i' }
    ],
    constant: true,
    payable: false,
    type: 'function',
    gas: 15405
  },
  {
    name: 'remove_liquidity_one_coin',
    outputs: [],
    inputs: [
      { type: 'uint256', name: '_token_amount' },
      { type: 'int128', name: 'i' },
      { type: 'uint256', name: 'min_amount' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 4044074
  },
  {
    name: 'ramp_A',
    outputs: [],
    inputs: [
      { type: 'uint256', name: '_future_A' },
      { type: 'uint256', unit: 'sec', name: '_future_time' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 151937
  },
  {
    name: 'stop_ramp_A',
    outputs: [],
    inputs: [],
    constant: false,
    payable: false,
    type: 'function',
    gas: 148697
  },
  {
    name: 'commit_new_fee',
    outputs: [],
    inputs: [
      { type: 'uint256', name: 'new_fee' },
      { type: 'uint256', name: 'new_admin_fee' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 110521
  },
  {
    name: 'apply_new_fee',
    outputs: [],
    inputs: [],
    constant: false,
    payable: false,
    type: 'function',
    gas: 97220
  },
  {
    name: 'revert_new_parameters',
    outputs: [],
    inputs: [],
    constant: false,
    payable: false,
    type: 'function',
    gas: 21955
  },
  {
    name: 'commit_transfer_ownership',
    outputs: [],
    inputs: [{ type: 'address', name: '_owner' }],
    constant: false,
    payable: false,
    type: 'function',
    gas: 74632
  },
  {
    name: 'apply_transfer_ownership',
    outputs: [],
    inputs: [],
    constant: false,
    payable: false,
    type: 'function',
    gas: 60688
  },
  {
    name: 'revert_transfer_ownership',
    outputs: [],
    inputs: [],
    constant: false,
    payable: false,
    type: 'function',
    gas: 22045
  },
  {
    name: 'withdraw_admin_fees',
    outputs: [],
    inputs: [],
    constant: false,
    payable: false,
    type: 'function',
    gas: 17565
  },
  {
    name: 'kill_me',
    outputs: [],
    inputs: [],
    constant: false,
    payable: false,
    type: 'function',
    gas: 37998
  },
  {
    name: 'unkill_me',
    outputs: [],
    inputs: [],
    constant: false,
    payable: false,
    type: 'function',
    gas: 22135
  },
  {
    name: 'coins',
    outputs: [{ type: 'address', name: '' }],
    inputs: [{ type: 'int128', name: 'arg0' }],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2310
  },
  {
    name: 'balances',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'int128', name: 'arg0' }],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2340
  },
  {
    name: 'fee',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2171
  },
  {
    name: 'admin_fee',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2201
  },
  {
    name: 'owner',
    outputs: [{ type: 'address', name: '' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2231
  },
  {
    name: 'initial_A',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2261
  },
  {
    name: 'future_A',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2291
  },
  {
    name: 'initial_A_time',
    outputs: [{ type: 'uint256', unit: 'sec', name: '' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2321
  },
  {
    name: 'future_A_time',
    outputs: [{ type: 'uint256', unit: 'sec', name: '' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2351
  },
  {
    name: 'admin_actions_deadline',
    outputs: [{ type: 'uint256', unit: 'sec', name: '' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2381
  },
  {
    name: 'transfer_ownership_deadline',
    outputs: [{ type: 'uint256', unit: 'sec', name: '' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2411
  },
  {
    name: 'future_fee',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2441
  },
  {
    name: 'future_admin_fee',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2471
  },
  {
    name: 'future_owner',
    outputs: [{ type: 'address', name: '' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 2501
  }
]
