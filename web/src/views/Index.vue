<template>
	<div class="page page-index">

	</div>
</template>

<script>
	import { mapState, mapMutations, mapActions } from 'vuex';

	export default {
		name: 'index',
		data() {
			return {

			}
		},
		components: {
		
		},
		computed: {
			...mapState([
      	'login',
			])
		},
		methods: {
	
		},
		mounted() {

		/* 	this.$https.post('/login', {
				username: 'wuyuhua',
				password: 'wuyuhua'
			}).then(res  => {
				console.log(res)
				localStorage.setItem('token', res.data.token)
			}) */
		}
	}
</script>

<style lang="scss" scoped>


</style>

