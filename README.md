# vuex-local-sync
localstorage sync to vuex



usage:

>1、 cjs


    import Vue from 'vue';
    
    import Vuex from 'vuex';
    
    Vue.use(Vuex);
    
    const VuexLocalSync = require('vuex-local-sync');
   
    
    const VuxPlugin = new VuexLocalSync.VueLocalSync({
      key: "alex",
      storage: window.localStorage
    });
    
    const mutations = {
      setName(state, payload) {
        state.name = payload;
      }
    };
    
    const store = new Vuex.Store({
      state: {
        count: 0,
        name: ''
      },
      plugins: [VuxPlugin.plugin],
      mutations: mutations
    });
    
    export default store;
    
    
 >2、 esm


    import Vue from 'vue';
    
    import Vuex from 'vuex';
    
    Vue.use(Vuex);
    
    import {VueLocalSync} from 'vuex-local-sync'
   
    
    const VuxPlugin = new VueLocalSync({
      key: "alex",
      storage: window.localStorage
    });
    
    const mutations = {
      setName(state, payload) {
        state.name = payload;
      }
    };
    
    const store = new Vuex.Store({
      state: {
        count: 0,
        name: ''
      },
      plugins: [VuxPlugin.plugin],
      mutations: mutations
    });
    
    export default store;
    
  
    
 first, this plugin can sync localStorage(specified key as 'alex') to vuex.  
 
 then，when you dispatch the muation(as 'setName' in this example), will sync store.state to localStorage.
 
 