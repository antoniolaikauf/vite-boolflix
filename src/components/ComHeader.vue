<script >
import { store } from '../store';
export default {
    newCopm: "comHeader",

    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light p-1 bg-dark">
        <a class="navbar-brand text-danger" href="#">BOOLFIX</a>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <form class="d-flex ">
                <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"
                    v-model="store.searchFilm">
                <button class="btn btn-outline-success bg-primary text-light" type="submit" @click.prevent="$emit('searchfilm')">Search</button>
            </form>
        </div>
    </nav>
</template>

<style scoped lang="scss"></style>
