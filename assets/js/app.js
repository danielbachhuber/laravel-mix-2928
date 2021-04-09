import Vue from 'vue';

// Individual components
Vue.component('component-container', require('./components/Container.vue').default);

if (document.querySelector('.vueify')) {
	new Vue({
		el: '.vueify',
	});
}
