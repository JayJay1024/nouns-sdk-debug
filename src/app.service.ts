import { Injectable } from '@nestjs/common';
import { ChainId, getContractAddressesForChainOrThrow } from '@nouns/sdk';

@Injectable()
export class AppService {
  getHello(): string {
    const { nounsToken } = getContractAddressesForChainOrThrow(ChainId.Mainnet);
    return 'Nouns token address: ' + nounsToken;
  }
}
