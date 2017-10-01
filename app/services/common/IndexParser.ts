import { Post } from "../../model/common/Post";

export abstract class IndexParser {

    abstract parse(document: string): Promise<Array<Post>>;

}
