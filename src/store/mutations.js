/*
* @Author: xiao
* @Date:   2018-07-01 17:36:57
* @Last Modified by:   xiao
* @Last Modified time: 2018-07-01 17:38:43
*/
export default {
	changeCity (state, city) {
		state.city = city
		try {
			localStorage.city = city
		}catch (e) {}
	}
}