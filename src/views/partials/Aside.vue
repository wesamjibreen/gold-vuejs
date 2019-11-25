<template>
    <div class="fixed-sidebar-left">
        <ul class="nav navbar-nav side-nav nicescroll-bar">
            <li class="navigation-header">
                <span>Main</span>
                <i class="zmdi zmdi-more"></i>
            </li>
            <li>
                <router-link :class="{active : $route.name ==='dashboard'}"  to="/dashboard">
                    <div class="pull-left"><i class="zmdi zmdi-landscape mr-20"></i><span class="right-nav-text">Dashboard</span></div>
                    <div class="pull-right"></div><div class="clearfix"></div>
                </router-link>
            </li>
            <li><hr class="light-grey-hr mb-10"/></li>
            <li>
                <router-link :class="{active : $route.name ==='users'}"  to="/users">
                    <div class="pull-left"><i class="zmdi zmdi-landscape mr-20"></i><span class="right-nav-text">Users</span></div>
                    <div class="pull-right"></div><div class="clearfix"></div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Aside",
        created() {
            console.log(this.$route.name)
        }
    }
</script>

<style scoped>

</style>