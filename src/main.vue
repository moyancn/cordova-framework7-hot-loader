<template>
    <!-- App -->
    <f7-app :enabled="false" :params="f7params">
        <f7-statusbar></f7-statusbar>
        <f7-panel left cover>
            <f7-view url="/panel-left/" links-view=".view-main" />
        </f7-panel>
        <f7-view url="/" :main="true" class="ios-edges"></f7-view>
    </f7-app>
</template>
<script>
// Import Routes...
import routes from './routes.js'

let theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
}

export default {
    data () {
        return {
            f7params: {
                theme: "auto",
                routes,
                statusbar: {
                    iosOverlaysWebView: true,
                    iosBackgroundColor: "##f7f7f8",
                    materialBackgroundColor: "#1b1b1b",
                    iosTextColor: "default"
                },
                id: 'io.framework7.testapp',
            }
        }
    },
    mounted () {
        var self = this
        document.addEventListener("deviceready", function () {
            console.log('deviceready...', self.$f7.device.cordova)
            self.$f7.device.cordova = true
            console.log('deviceready...', self.$f7.device.cordova)
            if (theme == 'dark') {
                this.$f7.statusbar.setBackgroundColor('#1b1b1b')
                this.$f7.statusbar.setIosTextColor('white')
            }
            else {
                this.$f7.statusbar.setBackgroundColor('##f7f7f8')
                this.$f7.statusbar.setIosTextColor('default')
            }
        });
    }
}
</script>
