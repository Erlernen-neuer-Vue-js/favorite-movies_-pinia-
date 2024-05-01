<template>
    <header class="header">
        <img src="/logo.svg" alt="logo" class="header-logo" />
        <h2 class="title">favorites movies</h2>
    </header>
    <div class="movies">
        {{ movieStore.movies }}
    </div>
</template>

<script setup>
import { useMovieStore } from './stores';
const movieStore = useMovieStore();
</script>

<style lang="css" scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.header-logo {
    max-width: 50px;
    margin-right: 10px;
}

.title {
    text-transform: capitalize;
}

.btn {
    border: none;
    width: 100px;
    height: 40px;
    font-size: 14px;
    margin: 0 10px;
    border-radius: 10px;
    cursor: pointer;
    background: #efefef;
}

.btn:hover {
    opacity: 0.7;
}

.btn_green {
    background: #37df5c;
}

.tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}
</style>
