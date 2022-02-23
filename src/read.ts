import { aws, queueURL, sqs } from "./services";

const params: aws.SQS.ReceiveMessageRequest = {
  QueueUrl: queueURL,
  MaxNumberOfMessages: 10,
  VisibilityTimeout: 30,
};

sqs.receiveMessage(params, (err, data) => {
  if (err) {
    console.log(`Error ${err}`);
  } else if (data.Messages) {
    console.log(data.Messages);
  }
});
