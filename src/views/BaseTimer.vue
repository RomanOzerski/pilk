<template>
    <div>
        <div>
        Remaining: {{ timerCount }}
        </div>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                timerCount: 180 
            }
        },

        watch: {

            timerCount: {
                handler(value) {
                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    }

                },
                immediate: true // This ensures the watcher is triggered upon creation
            }

        }
    }

</script>