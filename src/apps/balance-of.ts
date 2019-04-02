// tslint:disable:no-console
// tslint:disable:max-line-length

import Vue from 'vue/dist/vue.common'
import BigNumber from 'bignumber.js'

const balanceOfABI = { constant: true, inputs: [{ name: '_owner', type: 'address' }], name: 'balanceOf', outputs: [{ name: 'balance', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }

new Vue({
    data: {
        addr: '-',
        amount: '-',
    },
    methods: {
        identAction() {
            const arr = new Uint8Array(20)
            crypto.getRandomValues(arr)
            let random = '0x'
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < arr.length; i++) {
                random += ('0' + arr[i].toString(16)).slice(-2)
            }
            const signingService = connex.vendor.sign('cert')

            signingService.request({
                purpose: 'identification',
                payload: {
                    type: 'text',
                    content: 'Connex Intro is requesting your identification with random string, choose the wallet you want to link.\r\n\r\nRandom challenge: ' + random,
                },
            }).then((ret) => {
                this.addr = ret.annex.signer
            })

        },
        buttonAction() {
            const balanceOfMethod = connex.thor.account('0x0000000000000000000000000000456E65726779').method(balanceOfABI)
            balanceOfMethod.call(this.addr).then((ret) => {
                this.amount = new BigNumber((ret as any).decoded['0']).dividedBy(1e18).dp(0).toString()
            })
        },
    },
}).$mount('#balance-of')
