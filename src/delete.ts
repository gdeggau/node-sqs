import { aws, queueURL, sqs } from "./services";

const params: aws.SQS.ReceiveMessageRequest = {
  QueueUrl: queueURL,
  MaxNumberOfMessages: 10,
  VisibilityTimeout: 30,
  WaitTimeSeconds: 0,
};

const deleteMessage = () => {
  sqs.receiveMessage(params, (err, data) => {
    if (err) {
      console.log(`Error ${err}`);
    } else if (data.Messages) {
      console.log("Number of messages received: ", data.Messages.length);
      data.Messages.forEach((element) => {
        console.log("Message -> ", element);
        const deleteParams: aws.SQS.DeleteMessageRequest = {
          QueueUrl: queueURL,
          ReceiptHandle: element.ReceiptHandle || "",
        };
        sqs.deleteMessage(deleteParams, (err, data) => {
          if (err) {
            console.log(`Error ${err}`);
          } else {
            console.log("Message Deleted", data);
          }
        });
      });
    } else {
      console.log("No messages received");
    }
  });
};

deleteMessage();
