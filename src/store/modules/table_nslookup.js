import Axios from 'axios';


export default {

state : {
  table_nslookup: null
},

getters : {
  TABLE_NSLOOKUP: state => {
    return state.table_nslookup;
  },
},

mutations : {
  SET_NSLOOKUP: (state, payload) => {
    state.table_nslookup = payload;
  },

  ADD_NSLOOKUP: (state, payload) => {
    state.table_nslookup.push(payload);
  },
},

actions : {
  GET_NSLOOKUP: async (context, payload) => {
    let {data} = await Axios.get('http://localhost:5000/nslookup');
    context.commit('SET_NSLOOKUP', data);
  },

  SAVE_NSLOOKUP: async (context, payload) => {
    let {data} = await Axios.post('http://localhost:5000/nslookup');
    context.commit('ADD_NSLOOKUP', payload);
  },
},

};
