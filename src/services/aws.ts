import * as aws from "aws-sdk";

aws.config.update({ region: "us-east-1" });

export { aws };
