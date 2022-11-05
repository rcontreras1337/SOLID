import { PostService } from './05-dependency-b';
import { JasonDataBaseService, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {
    // const provider = new JasonDataBaseService();
    const provider = new LocalDataBaseService();

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();