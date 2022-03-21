<template>
    <div class="container fluid">
        <div class="d-flex flex-column ">
            <b-alert show variant="danger">
                <div class="noti">
                    <slot name="body">
                    <h5>NO AUTHOR FOUND</h5>
                    </slot>
                </div>
            </b-alert>
        </div>

    </div>
</template>
