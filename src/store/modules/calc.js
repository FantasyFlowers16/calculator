
export default {
    actions:{
    },
    mutations:{
        add: ({ change }, val) => change.push(val),
        add2: ({ change2 }, val) => change2.push(val),
        plus(state){
            const a=parseInt(state.change.join(''))
            const b=parseInt(state.change2.join(''))
            state.result=a+b
        },
        minus(state){
            const a=parseInt(state.change.join(''))
            const b=parseInt(state.change2.join(''))
            state.result=a-b
        },
        reset(state){
            state.change=[]
            state.change2=[]
            state.result=0
        }
    },
    state:{
        numbers:[1,2,3,4,5,6,7,8,9,0],
        reset:['C'],
        minus:['-'],
        plus:['+'],
        equally:['='],
        change:[],
        change2:[],
        result:'',

    },
    getters:{
         number(state){
             return state.numbers
         },
        minus(state){
            return state.minus
        },
        plus(state){
            return state.plus
        },
        equally(state){
            return state.equally
        },
        change(state){
            return state.change
        },
        change2(state){
            return state.change2
        },
        result(state){
            return state.result
        },
        reset(state){
            return state.reset
        }
    }
}