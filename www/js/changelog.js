window.version = '0.2.1';
window.changelog = [
  {
    version: '0.2.1',
    date: '2018-06-21',
    changes: [
      'added: reading fees from network instead of using hardcoded ones',
      'added: indicate wallet contains unconfirmed transactions by blinking',
      'added: warning when sending unconfirmed inputs',
      'added: coinpaprica.com as optional price provider'
    ]
  },
  {
    version: '0.2.0',
    date: '2018-06-14',
    changes: [
      'added: tools tab',
      'added: send and receive coins via message feature',
      'added: scan/paste any code tool that detects coin and open given send form (or to receive coins from message)',
      'fixed: show warning when scanning different coin address when on send form.',
      'fixed: detecting proper coin on BIP72 address (so it can be used in "scan any" tool)'
    ]
  },
  {
    version: '0.1.8',
    date: '2018-05-31',
    changes: [
      'added: DOGE coin wallet support',
      'added: BIP39 support; private keys are generated from 12-word mnemonic passphrase',
      'added: BIP70 support (bitpay payments)'
    ]
  },
  {
    version: '0.1.7',
    date: '2018-04-29',
    changes: [
      'first public release',
      'basic portfolio features',
      'no wallet support'
    ]
  }
];
