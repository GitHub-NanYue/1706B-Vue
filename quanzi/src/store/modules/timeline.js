import { showDynamic, sendWord } from '../../service/index'

const state = {
    list:[]
}

const mutations = {
    updataList(state,payload){
        state.list = payload.reverse();
    }
}
const actions = {
    async getTimeline(context,payload){
        let data = await showDynamic();
        console.log(data.data.data)
        context.commit('updataList',data.data.data)
    },
    async postTimeline(connext,payload){
        let data = await sendWord({dynamicContent:payload})
        console.log('data*************',data)
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}