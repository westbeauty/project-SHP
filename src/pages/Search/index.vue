<template>
    <div>
        <h3>params参数为：{{this.$route.params.keyword}}---------{{keyword}}</h3>
        <h3>query参数为：{{this.$route.query.k}}-----------{{k}}</h3>
    </div>
</template>

<script>
export default {
    name:'Search',
    props:['keyword','k']

}
</script>

<style>

</style>