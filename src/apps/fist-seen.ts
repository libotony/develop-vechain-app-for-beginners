// tslint:disable:no-console
import Vue from 'vue/dist/vue.common'

new Vue({
    methods: {
        buttonAction() {
            const signingService = connex.vendor.sign('cert')
            signingService.request({
                purpose: 'identification',
                payload: {
                    type: 'text',
                    content: '我在Sync中！',
                },
            }).catch((e) => {
                console.error(e)
            })
        },
    },
}).$mount('#first-seen')
