import { PostService } from './05-dependency-b';
import { JasonDataBaseService } from './05-dependency-c';


// Main
(async () => {
    const provider = new JasonDataBaseService();

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();