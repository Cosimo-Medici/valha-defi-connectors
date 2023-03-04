export const Distributor = [
  {
    name: 'CommitAdmin',
    inputs: [{ name: 'admin', type: 'address', indexed: false }],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'ApplyAdmin',
    inputs: [{ name: 'admin', type: 'address', indexed: false }],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'ToggleAllowCheckpointToken',
    inputs: [{ name: 'toggle_flag', type: 'bool', indexed: false }],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'CheckpointToken',
    inputs: [
      { name: 'time', type: 'uint256', indexed: false },
      { name: 'tokens', type: 'uint256', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'Claimed',
    inputs: [
      { name: 'recipient', type: 'address', indexed: true },
      { name: 'amount', type: 'uint256', indexed: false },
      { name: 'claim_epoch', type: 'uint256', indexed: false },
      { name: 'max_epoch', type: 'uint256', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_voting_escrow', type: 'address' },
      { name: '_start_time', type: 'uint256' },
      { name: '_token', type: 'address' },
      { name: '_admin', type: 'address' },
      { name: '_emergency_return', type: 'address' }
    ],
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'checkpoint_token',
    inputs: [],
    outputs: [],
    gas: 855540
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 've_for_at',
    inputs: [
      { name: '_user', type: 'address' },
      { name: '_timestamp', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 518366
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'checkpoint_total_supply',
    inputs: [],
    outputs: [],
    gas: 21265540
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'claim',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'claim',
    inputs: [{ name: '_addr', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'claim_many',
    inputs: [{ name: '_receivers', type: 'address[20]' }],
    outputs: [{ name: '', type: 'bool' }],
    gas: 50179990
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'burn',
    inputs: [{ name: '_coin', type: 'address' }],
    outputs: [{ name: '', type: 'bool' }],
    gas: 862907
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'commit_admin',
    inputs: [{ name: '_addr', type: 'address' }],
    outputs: [],
    gas: 39722
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'accept_admin',
    inputs: [],
    outputs: [],
    gas: 39570
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'toggle_allow_checkpoint_token',
    inputs: [],
    outputs: [],
    gas: 41700
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'kill_me',
    inputs: [],
    outputs: [],
    gas: 46824
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'recover_balance',
    inputs: [{ name: '_coin', type: 'address' }],
    outputs: [{ name: '', type: 'bool' }],
    gas: 19233
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'start_time',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 2718
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'time_cursor',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 2748
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'time_cursor_of',
    inputs: [{ name: 'arg0', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 2993
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'user_epoch_of',
    inputs: [{ name: 'arg0', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 3023
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'last_token_time',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 2838
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'tokens_per_week',
    inputs: [{ name: 'arg0', type: 'uint256' }],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 2913
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'voting_escrow',
    inputs: [],
    outputs: [{ name: '', type: 'address' }],
    gas: 2898
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'token',
    inputs: [],
    outputs: [{ name: '', type: 'address' }],
    gas: 2928
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'total_received',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 2958
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'token_last_balance',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 2988
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 've_supply',
    inputs: [{ name: 'arg0', type: 'uint256' }],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 3063
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'admin',
    inputs: [],
    outputs: [{ name: '', type: 'address' }],
    gas: 3048
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'future_admin',
    inputs: [],
    outputs: [{ name: '', type: 'address' }],
    gas: 3078
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'can_checkpoint_token',
    inputs: [],
    outputs: [{ name: '', type: 'bool' }],
    gas: 3108
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'emergency_return',
    inputs: [],
    outputs: [{ name: '', type: 'address' }],
    gas: 3138
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'is_killed',
    inputs: [],
    outputs: [{ name: '', type: 'bool' }],
    gas: 3168
  }
]
