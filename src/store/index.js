/*
* @Author: xiao
* @Date:   2018-07-01 16:26:21
* @Last Modified by:   xiao
* @Last Modified time: 2018-07-01 17:40:36
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations
})