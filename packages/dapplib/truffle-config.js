require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile pupil inflict pet bone siren'; 
let testAccounts = [
"0x333edd4f49b0190c12e45af42f23c0edc8a3597576f313d80f840409ab4bdaab",
"0xfa87cacb8c9d655e098e9e306ea10c76bcb535546a7e55eac4b14563d49a7ea1",
"0xbc68a4011d1a9ca10d019991ef0a03dce48790c673ea60a9a6c4688ce870a6dc",
"0xafb76382c54ff924554aad4b22d26af6d9fac67d7fb6e1e9f0cd10f5501513c3",
"0xa94ca534cc2dfd2c89f2d5254a81b614c7bbb4768bcac38a0a4145b4ac33c0d7",
"0x07c4e483ffd22c0dc92648a847ff355305b7d4b586f66e3186cc681ebcc36382",
"0x825432df566545b4c86a3fce5396489e7bdf67909376264998821a92fcc712b4",
"0x6f8bb15bf9d4e8f3fcfc9d5ca40496cceb19238f86de07d4f599da167ffbf858",
"0xb2e3ddb88ec70057cf0306a7aebf7fa572e0ad7b7d270b1522e250dfe8fa4064",
"0x48dbdd3375f56f1277169dd397947dad61965191666fba4c32805e9b542bb495"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


