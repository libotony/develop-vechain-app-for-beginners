// tslint:disable:no-console
import Vue from 'vue/dist/vue.common'

new Vue({
    data: {
        number: '-',
        time: '-',
        score: 0,
    },
    methods: {
        buttonAction() {
            const blk = connex.thor.block()

            blk.get().then((block) => {
                this.number = block!.number.toString()
                this.time = new Date(block!.timestamp * 1000).toLocaleString()
                this.score = block!.totalScore
            })
        },
    },
}).$mount('#get-block')
