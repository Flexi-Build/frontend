/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { FlexBuild, FlexBuildInterface } from "../FlexBuild";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "component_id",
        type: "uint256",
      },
    ],
    name: "ComponentBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "code_hash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ComponentCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "buyComponents",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code_hash",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "createComponent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getComponents",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "code_hash",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct FlexBuild.Component[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "id_to_component",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "code_hash",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "id_to_order",
    outputs: [
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "component_id",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260008055600060025534801561001957600080fd5b50611254806100296000396000f3fe60806040526004361061004a5760003560e01c80636b0cab061461004f57806399d50d5d1461006b578063c1a0d47f14610096578063c74fd897146100d4578063c8f7801214610113575b600080fd5b61006960048036038101906100649190610955565b61013c565b005b34801561007757600080fd5b506100806103be565b60405161008d9190610b7f565b60405180910390f35b3480156100a257600080fd5b506100bd60048036038101906100b89190610ba1565b610570565b6040516100cb929190610bec565b60405180910390f35b3480156100e057600080fd5b506100fb60048036038101906100f69190610ba1565b6105b4565b60405161010a93929190610c5f565b60405180910390f35b34801561011f57600080fd5b5061013a60048036038101906101359190610d52565b610686565b005b6000805b825181101561019a57600360008483815181106101605761015f610dae565b5b6020026020010151815260200190815260200160002060020154826101859190610e0c565b9150808061019290610e40565b915050610140565b508034146101dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101d490610ed4565b60405180910390fd5b60005b82518110156103b95733600160008054815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082818151811061025257610251610dae565b5b60200260200101516001600080548152602001908152602001600020600101819055506003600084838151811061028c5761028b610dae565b5b6020026020010151815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600360008685815181106102f6576102f5610dae565b5b60200260200101518152602001908152602001600020600201549081150290604051600060405180830381858888f1935050505015801561033b573d6000803e3d6000fd5b507fc2a9d06018ac4186f00bea3f072175fda7c50c43f0729a0e59d70e4d64da727f3384838151811061037157610370610dae565b5b6020026020010151604051610387929190610bec565b60405180910390a16000808154809291906103a190610e40565b919050555080806103b190610e40565b9150506101e0565b505050565b6060600060025467ffffffffffffffff8111156103de576103dd6107dc565b5b60405190808252806020026020018201604052801561041757816020015b61040461077b565b8152602001906001900390816103fc5790505b50905060005b60025481101561056857600360008281526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546104ab90610f23565b80601f01602080910402602001604051908101604052809291908181526020018280546104d790610f23565b80156105245780601f106104f957610100808354040283529160200191610524565b820191906000526020600020905b81548152906001019060200180831161050757829003601f168201915b5050505050815260200160028201548152505082828151811061054a57610549610dae565b5b6020026020010181905250808061056090610e40565b91505061041d565b508091505090565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010180546105fd90610f23565b80601f016020809104026020016040519081016040528092919081815260200182805461062990610f23565b80156106765780601f1061064b57610100808354040283529160200191610676565b820191906000526020600020905b81548152906001019060200180831161065957829003601f168201915b5050505050908060020154905083565b3360036000600254815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160036000600254815260200190815260200160002060010190816107029190611100565b5080600360006002548152602001908152602001600020600201819055507f98f7bac32ab2b80ef4ba459474f2d60dac62c397a2a312dbddc8d8a577c52cfc33838360025460405161075794939291906111d2565b60405180910390a16002600081548092919061077290610e40565b91905055505050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610814826107cb565b810181811067ffffffffffffffff82111715610833576108326107dc565b5b80604052505050565b60006108466107b2565b9050610852828261080b565b919050565b600067ffffffffffffffff821115610872576108716107dc565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b61089b81610888565b81146108a657600080fd5b50565b6000813590506108b881610892565b92915050565b60006108d16108cc84610857565b61083c565b905080838252602082019050602084028301858111156108f4576108f3610883565b5b835b8181101561091d578061090988826108a9565b8452602084019350506020810190506108f6565b5050509392505050565b600082601f83011261093c5761093b6107c6565b5b813561094c8482602086016108be565b91505092915050565b60006020828403121561096b5761096a6107bc565b5b600082013567ffffffffffffffff811115610989576109886107c1565b5b61099584828501610927565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109f5826109ca565b9050919050565b610a05816109ea565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a45578082015181840152602081019050610a2a565b60008484015250505050565b6000610a5c82610a0b565b610a668185610a16565b9350610a76818560208601610a27565b610a7f816107cb565b840191505092915050565b610a9381610888565b82525050565b6000606083016000830151610ab160008601826109fc565b5060208301518482036020860152610ac98282610a51565b9150506040830151610ade6040860182610a8a565b508091505092915050565b6000610af58383610a99565b905092915050565b6000602082019050919050565b6000610b158261099e565b610b1f81856109a9565b935083602082028501610b31856109ba565b8060005b85811015610b6d5784840389528151610b4e8582610ae9565b9450610b5983610afd565b925060208a01995050600181019050610b35565b50829750879550505050505092915050565b60006020820190508181036000830152610b998184610b0a565b905092915050565b600060208284031215610bb757610bb66107bc565b5b6000610bc5848285016108a9565b91505092915050565b610bd7816109ea565b82525050565b610be681610888565b82525050565b6000604082019050610c016000830185610bce565b610c0e6020830184610bdd565b9392505050565b600082825260208201905092915050565b6000610c3182610a0b565b610c3b8185610c15565b9350610c4b818560208601610a27565b610c54816107cb565b840191505092915050565b6000606082019050610c746000830186610bce565b8181036020830152610c868185610c26565b9050610c956040830184610bdd565b949350505050565b600080fd5b600067ffffffffffffffff821115610cbd57610cbc6107dc565b5b610cc6826107cb565b9050602081019050919050565b82818337600083830152505050565b6000610cf5610cf084610ca2565b61083c565b905082815260208101848484011115610d1157610d10610c9d565b5b610d1c848285610cd3565b509392505050565b600082601f830112610d3957610d386107c6565b5b8135610d49848260208601610ce2565b91505092915050565b60008060408385031215610d6957610d686107bc565b5b600083013567ffffffffffffffff811115610d8757610d866107c1565b5b610d9385828601610d24565b9250506020610da4858286016108a9565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e1782610888565b9150610e2283610888565b9250828201905080821115610e3a57610e39610ddd565b5b92915050565b6000610e4b82610888565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610e7d57610e7c610ddd565b5b600182019050919050565b7f746f74616c20707269636520646f65736e2774206d6174636800000000000000600082015250565b6000610ebe601983610c15565b9150610ec982610e88565b602082019050919050565b60006020820190508181036000830152610eed81610eb1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f3b57607f821691505b602082108103610f4e57610f4d610ef4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610fb67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610f79565b610fc08683610f79565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610ffd610ff8610ff384610888565b610fd8565b610888565b9050919050565b6000819050919050565b61101783610fe2565b61102b61102382611004565b848454610f86565b825550505050565b600090565b611040611033565b61104b81848461100e565b505050565b5b8181101561106f57611064600082611038565b600181019050611051565b5050565b601f8211156110b45761108581610f54565b61108e84610f69565b8101602085101561109d578190505b6110b16110a985610f69565b830182611050565b50505b505050565b600082821c905092915050565b60006110d7600019846008026110b9565b1980831691505092915050565b60006110f083836110c6565b9150826002028217905092915050565b61110982610a0b565b67ffffffffffffffff811115611122576111216107dc565b5b61112c8254610f23565b611137828285611073565b600060209050601f83116001811461116a5760008415611158578287015190505b61116285826110e4565b8655506111ca565b601f19841661117886610f54565b60005b828110156111a05784890151825560018201915060208501945060208101905061117b565b868310156111bd57848901516111b9601f8916826110c6565b8355505b6001600288020188555050505b505050505050565b60006080820190506111e76000830187610bce565b81810360208301526111f98186610c26565b90506112086040830185610bdd565b6112156060830184610bdd565b9594505050505056fea2646970667358221220fa4ceffd897829c76576dd3aef19e82014c06cc45fc804a27ce379b75bbe34f564736f6c63430008110033";

type FlexBuildConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FlexBuildConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FlexBuild__factory extends ContractFactory {
  constructor(...args: FlexBuildConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FlexBuild> {
    return super.deploy(overrides || {}) as Promise<FlexBuild>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FlexBuild {
    return super.attach(address) as FlexBuild;
  }
  override connect(signer: Signer): FlexBuild__factory {
    return super.connect(signer) as FlexBuild__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlexBuildInterface {
    return new utils.Interface(_abi) as FlexBuildInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlexBuild {
    return new Contract(address, _abi, signerOrProvider) as FlexBuild;
  }
}
