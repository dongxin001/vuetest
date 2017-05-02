
var Main = {
	data () {
	  return {
	    radio: '1'
	      };
	    }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')

