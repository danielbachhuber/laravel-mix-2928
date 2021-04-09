<template>
<div class="onoffswitch">
	<input type="checkbox" :name="name" class="onoffswitch-checkbox" :id="name" v-model="inputValue" :disabled="disabled">
	<label class="onoffswitch-label" :for="name">
		<span class="onoffswitch-inner"></span>
		<span class="onoffswitch-switch"></span>
	</label>
</div>
</template>
<script>
export default {
	props: {
		disabled: {
			type: Boolean,
			default: false,
		},
		name: {
			type: String,
			required: true,
		},
		value: {
			type: Boolean,
			required: true,
		},
	},
	data() {
		return {
			inputValue: this.value,
		};
	},
	watch: {
		value(val) {
			this.inputValue = val;
		},
		inputValue(val) {
			this.$emit('input', val);
		}
	}
}
</script>
<style>
.onoffswitch {
	position: relative; width: 48px;
	-webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
}
.onoffswitch-checkbox {
	display: none;
}
.onoffswitch-label {
	display: block; overflow: hidden; cursor: pointer;
	border: 1px solid #BFC3D0; border-radius: 6px;
}
.onoffswitch-inner {
	display: block; width: 200%; margin-left: -100%;
	transition: margin 0.3s ease-in 0s;
}
.onoffswitch-inner:before, .onoffswitch-inner:after {
	display: block; float: left; width: 50%; height: 20px; padding: 0; line-height: 20px;
	font-size: 10px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;
	box-sizing: border-box;
}
.onoffswitch-inner:before {
	content: "ON";
	padding-left: 5px;
	background-color: #008FD7; color: #FFFFFF;
}
.onoffswitch-inner:after {
	content: "OFF";
	padding-right: 3px;
	background-color: #7D7F8E; color: #FFFFFF;
	text-align: right;
}
.onoffswitch-switch {
	display: block; width: 21px; margin: -0.5px;
	background: #FFFFFF;
	position: absolute; top: 0; bottom: 0;
	right: 28px;
	border: 1px solid #BFC3D0; border-radius: 6px;
	transition: all 0.3s ease-in 0s; 
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
	margin-left: 0;
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
	right: 0px; 
}
</style>
