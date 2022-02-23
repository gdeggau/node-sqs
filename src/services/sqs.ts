import { aws } from "./aws";

const sqs = new aws.SQS({ apiVersion: "2012-11-05" });
const queueURL = "https://sqs.us-east-2.amazonaws.com/618538489794/my-queue";

export { sqs, queueURL };
