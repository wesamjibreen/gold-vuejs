<template>
    <div class="container-fluid pt-25">
        <!-- Row -->
        <div class="row">
            <div class="col-sm-12">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <div class="pull-left">
                            <h6 class="panel-title txt-dark">Basic Table</h6>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="panel-wrapper collapse in">
                        <div class="panel-body">
                            <div class="table-wrap mt-40">
                                <div class="table-responsive">
                                    <table class="table mb-0">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                            <th>Role</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Jens</td>
                                            <td>Brincker</td>
                                            <td>Brincker123</td>
                                            <td><span class="label label-danger">admin</span> </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Mark</td>
                                            <td>Hay</td>
                                            <td>Hay123</td>
                                            <td><span class="label label-info">member</span> </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Anthony</td>
                                            <td>Davie</td>
                                            <td>Davie123</td>
                                            <td><span class="label label-warning">developer</span> </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>David</td>
                                            <td>Perry</td>
                                            <td>Perry123</td>
                                            <td><span class="label label-success">supporter</span> </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Anthony</td>
                                            <td>Davie</td>
                                            <td>Davie123</td>
                                            <td><span class="label label-info">member</span> </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Alan</td>
                                            <td>Gilchrist</td>
                                            <td>Gilchrist123</td>
                                            <td><span class="label label-success">supporter</span> </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>

</style>