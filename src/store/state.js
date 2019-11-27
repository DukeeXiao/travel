/*
* @Author: xiao
* @Date:   2018-07-01 17:37:06
* @Last Modified by:   xiao
* @Last Modified time: 2018-07-01 18:11:09
*/
let defaultCity = '北京'
try {
	if (localStorage.city) {
		defaultCity = localStorage.city
	}
}catch (e) {}

export default {
	city: defaultCity 
}