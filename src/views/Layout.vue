<template>
    <div class="wrapper theme-4-active pimary-color-red">
        <v-header></v-header>
        <v-aside></v-aside>
        <div class="right-sidebar-backdrop"></div>
        <div class="page-wrapper">
            <router-view></router-view>
            <v-footer></v-footer>
        </div>
    </div>
</template>

<script>
    require( '../components');
    export default {
        name: "Layout",
    }
</script>

<style scoped>
    @import "../assets/vendors/bower_components/morris.js/morris.css";
    @import "../assets/vendors/bower_components/datatables/media/css/jquery.dataTables.min.css";
    @import "../assets/vendors/bower_components/jquery-toast-plugin/dist/jquery.toast.min.css";
    @import "../assets/css/style.css";
</style>