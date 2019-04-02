// tslint:disable:no-console
// tslint:disable:max-line-length

import Vue from 'vue/dist/vue.common'
import BigNumber from 'bignumber.js'

const transferABI = { constant: false, inputs: [{ name: '_to', type: 'address' }, { name: '_amount', type: 'uint256' }], name: 'transfer', outputs: [{ name: 'success', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }

new Vue({
    data: {
        amount: undefined,
        addr: undefined,
        txid: '-',
    },
    methods: {
        buttonAction() {
            const transferMethod = connex.thor.account('0x0000000000000000000000000000456E65726779').method(transferABI)
            const clause = transferMethod.asClause(this.addr, new BigNumber(this.amount as any).multipliedBy(1e18).dp(0).toString())

            const signingService = connex.vendor.sign('tx')
            signingService.comment('Transfer token to ' + this.addr)

            signingService.request([clause]).then((result) => {
                this.txid = result.txid
            }).catch((e) => {
                console.log('transfer-action', e)
            })
        },
    },
}).$mount('#transfer')
