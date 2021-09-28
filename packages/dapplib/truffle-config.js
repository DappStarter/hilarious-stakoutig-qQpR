require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile purpose inner area swift twelve'; 
let testAccounts = [
"0xd74ca3905157705063008caecad2db697120d9213fcbfcd25b8031d96428511e",
"0x2baed4abf774d0dd7d52ef031ed7f768202f1b402af4cbb3c174e2ad285c7607",
"0xa608be430e2a628760eb7e32b16d87f29128f784dfec2e3f9bbaa4ce9ce44db4",
"0xc961671b862b6301899d4a4315a721775ba07c9e271f2b7fafc044cea1ed5c2f",
"0x3b283b06f4b380d5654564e900579ca245d215db3f4e78832a10564d10fb6e32",
"0x488300c5c1081cdb611f83fc0b913666c13eedc88d91799a05e8e72c24b460c8",
"0x879fefddf56542de3d3034d6395fbf4fb57c538ad51434bb28dcac6c94fce956",
"0x7b18701c4113c840b69c415baecdecbb2e2d1d1a9928b4914da89d1859cec41d",
"0xcaf89332825088481e8c6cf81579c43f073cf3f795c8a8f0e9375e845c87f861",
"0x9acc29da2612c0d874d6fa735894964515c5110b3b73467c441fb8c619c71e86"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

