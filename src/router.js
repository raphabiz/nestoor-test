import Vue from "vue";
import Router from "vue-router";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            name: 'Posts',
            component: Posts,
        },
        {
            path: ':idPost/comments',
            name: 'Comments',
            component: Comments,
        },
        {
            path: '/:idPost/comments',
            name: 'Comments',
            component: Comments,
        }

    ]
})