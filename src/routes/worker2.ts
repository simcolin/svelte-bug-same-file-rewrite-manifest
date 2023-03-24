import { log } from "./common-module";

onmessage = ({ data }: MessageEvent<number>) => {
    log(data);
    close();
}

export default {}