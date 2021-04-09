import Vue from 'vue';

// Individual components
Vue.component('on-off-switch', require('./components/OnOffSwitch.vue').default);

if (document.querySelector('.vueify')) {
	new Vue({
		el: '.vueify',
	});
}
