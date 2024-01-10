<script >
export default {
    comnew: "cardiesima",

    props: {
        films: Object
    }
}
</script>

<template>
    <div>
        {{ films.title }}
        {{ films.original_title }}
        {{ films.vote_average }}
        {{ films.original_language }}

        <img v-if="films.original_language === 'ja'"
            src="https://tse1.mm.bing.net/th?id=OIP.pi5-qwhXy9IX2PyMDCaA5gHaEy&pid=Api&P=0&h=180" alt="">
        <img v-else-if="films.original_language === 'en'"
            src="https://tse2.mm.bing.net/th?id=OIP.wwDmpRbHZQv8ijyk2Nb0XwHaEo&pid=Api&P=0&h=180" alt="">
        <img v-else src="https://tse1.mm.bing.net/th?id=OIP.dA-znFMNgE62Fhiln_bTngHaE8&pid=Api&P=0&h=180" alt="">
    </div>
</template>

<style scoped lang="scss">
img {
    width: 50px;
}
</style>
