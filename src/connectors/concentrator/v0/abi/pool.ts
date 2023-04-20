export const POOLABI = [
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "_vault",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs":
        [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs":
        [
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "_feeType",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "CancleCustomizeFee",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs":
        [
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "_feeType",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_rate",
                "type": "uint256"
            }
        ],
        "name": "CustomizeFee",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs":
        [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            }
        ],
        "name": "Deposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs":
        [
            {
                "indexed": true,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "platformFee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "harvestBounty",
                "type": "uint256"
            }
        ],
        "name": "Harvest",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs":
        [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_expiredAt",
                "type": "uint256"
            }
        ],
        "name": "Lock",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs":
        [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs":
        [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs":
        [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_platform",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "_platformPercentage",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "_bountyPercentage",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "_repayPercentage",
                "type": "uint32"
            }
        ],
        "name": "UpdateFeeInfo",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs":
        [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_harvester",
                "type": "address"
            }
        ],
        "name": "UpdateHarvester",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs":
        [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_length",
                "type": "uint256"
            }
        ],
        "name": "UpdateRewardPeriodLength",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs":
        [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_zap",
                "type": "address"
            }
        ],
        "name": "UpdateZap",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs":
        [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            }
        ],
        "name": "Withdraw",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs":
        [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "WithdrawExpired",
        "type": "event"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs":
        [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [],
        "name": "asset",
        "outputs":
        [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [],
        "name": "checkpoint",
        "outputs":
        [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "uint256",
                "name": "_shares",
                "type": "uint256"
            }
        ],
        "name": "convertToAssets",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "uint256",
                "name": "_assets",
                "type": "uint256"
            }
        ],
        "name": "convertToShares",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [],
        "name": "decimals",
        "outputs":
        [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs":
        [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "uint256",
                "name": "_assets",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_receiver",
                "type": "address"
            }
        ],
        "name": "deposit",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "uint256",
                "name": "_assets",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_receiver",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_minShareOut",
                "type": "uint256"
            }
        ],
        "name": "depositWithCRV",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "_shares",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "uint256",
                "name": "_assets",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_receiver",
                "type": "address"
            }
        ],
        "name": "depositWithSdVeCRV",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "_shares",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [],
        "name": "feeInfo",
        "outputs":
        [
            {
                "internalType": "address",
                "name": "platform",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "platformPercentage",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "bountyPercentage",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "withdrawPercentage",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "bytes32",
                "name": "_feeType",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getFeeRate",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "rate",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserLocks",
        "outputs":
        [
            {
                "components":
                [
                    {
                        "internalType": "uint128",
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "internalType": "uint128",
                        "name": "expireAt",
                        "type": "uint128"
                    }
                ],
                "internalType": "struct SdCRVLocker.LockedBalance[]",
                "name": "_locks",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "_recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_minAssets",
                "type": "uint256"
            }
        ],
        "name": "harvest",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs":
        [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "_zap",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs":
        [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "maxDeposit",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "maxMint",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "maxRedeem",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "maxWithdraw",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "uint256",
                "name": "_shares",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_receiver",
                "type": "address"
            }
        ],
        "name": "mint",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [],
        "name": "name",
        "outputs":
        [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [],
        "name": "owner",
        "outputs":
        [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "uint256",
                "name": "_assets",
                "type": "uint256"
            }
        ],
        "name": "previewDeposit",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "uint256",
                "name": "_shares",
                "type": "uint256"
            }
        ],
        "name": "previewMint",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "uint256",
                "name": "_shares",
                "type": "uint256"
            }
        ],
        "name": "previewRedeem",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "uint256",
                "name": "_assets",
                "type": "uint256"
            }
        ],
        "name": "previewWithdraw",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "uint256",
                "name": "_shares",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_receiver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "redeem",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [],
        "name": "renounceOwnership",
        "outputs":
        [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [],
        "name": "rewardInfo",
        "outputs":
        [
            {
                "internalType": "uint128",
                "name": "rate",
                "type": "uint128"
            },
            {
                "internalType": "uint32",
                "name": "periodLength",
                "type": "uint32"
            },
            {
                "internalType": "uint48",
                "name": "lastUpdate",
                "type": "uint48"
            },
            {
                "internalType": "uint48",
                "name": "finishAt",
                "type": "uint48"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "_percentage",
                "type": "uint32"
            }
        ],
        "name": "setWithdrawFeeForUser",
        "outputs":
        [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [],
        "name": "symbol",
        "outputs":
        [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [],
        "name": "totalAssets",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [],
        "name": "totalSupply",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs":
        [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs":
        [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs":
        [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "_platform",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "_platformPercentage",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "_bountyPercentage",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "_withdrawPercentage",
                "type": "uint32"
            }
        ],
        "name": "updateFeeInfo",
        "outputs":
        [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "_harvester",
                "type": "address"
            }
        ],
        "name": "updateHarvester",
        "outputs":
        [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "uint32",
                "name": "_length",
                "type": "uint32"
            }
        ],
        "name": "updateRewardPeriodLength",
        "outputs":
        [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "_zap",
                "type": "address"
            }
        ],
        "name": "updateZap",
        "outputs":
        [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "uint256",
                "name": "_assets",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_receiver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "withdraw",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_recipient",
                "type": "address"
            }
        ],
        "name": "withdrawExpired",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs":
        [],
        "name": "withdrawLockTime",
        "outputs":
        [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs":
        [],
        "name": "zap",
        "outputs":
        [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
] as const