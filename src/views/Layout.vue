<template>
    <!-- Preloader -->
    <!--<div class="preloader-it">-->
    <!--<div class="la-anim-1"></div>-->
    <!--</div>-->
    <!-- /Preloader -->
    <div class="wrapper theme-4-active pimary-color-red">
        <!-- Top Menu Items -->
        <v-header></v-header>
        <!-- /Top Menu Items -->

        <!-- Left Sidebar Menu -->
        <v-aside></v-aside>
        <!-- /Left Sidebar Menu -->


        <!-- Right Sidebar Backdrop -->
        <div class="right-sidebar-backdrop"></div>
        <!-- /Right Sidebar Backdrop -->

        <div class="page-wrapper">
            <router-view></router-view>

            <!-- Footer -->
            <v-footer></v-footer>
            <!-- /Footer -->

        </div>

        <!-- Main Content -->
        <!-- /Main Content -->

    </div>
    <!-- /#wrapper -->

</template>

<script>
    import vHeader from "./partials/Header";
    import vAside from "./partials/Aside";
    import vFooter from "./partials/Footer";

    export default {
        name: "Layout",
        components: {
            vHeader,
            vAside,
            vFooter
        },
    }
</script>

<style scoped>
    @import "../assets/vendors/bower_components/morris.js/morris.css";
    @import "../assets/vendors/bower_components/datatables/media/css/jquery.dataTables.min.css";
    @import "../assets/vendors/bower_components/jquery-toast-plugin/dist/jquery.toast.min.css";
    @import "../assets/css/style.css";
</style>