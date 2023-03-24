import { log } from "./common-module";

onmessage = ({ data }: MessageEvent<string>) => {
    log(data);
}

export default {}