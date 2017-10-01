import { PostsService } from "../common/PostsService";
import { MefiPostIndexParser } from "./MefiPostIndexParser";

const MEFI_POSTS_URL = "https://www.metafilter.com/index.cfm";
const SITE_ID = "mefi";

export class MefiPostsService extends PostsService {

    constructor(authService) {
        super(MEFI_POSTS_URL, SITE_ID, MefiPostIndexParser, authService);
    }

    fetchPosts(page) {
        return super.fetchPosts(page);
    }

}
