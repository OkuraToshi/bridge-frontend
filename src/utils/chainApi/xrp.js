import { isValidAddress as isValidSTCAddress } from '@starcoin/stc-util';
import { toStandardHex } from '@/utils/convertors';
import { decodeAccountID } from 'ripple-address-codec';
import Base58 from 'base58-js';

function addressToHash(address) {
  return address;
}

function addressToHex(address) {
  const addresshex = Buffer.from(decodeAccountID(address)).toString('hex');
  return addresshex;
}

function isValidAddress(address) {
  return true;
}

export default {
  install() {},
  addressToHash,
  addressToHex,
  isValidAddress,
};
