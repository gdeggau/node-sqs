import { aws, queueURL, sqs } from "./services";

const sendSQS = () => {
  const params: aws.SQS.SendMessageRequest = {
    QueueUrl: queueURL,
    DelaySeconds: 0,
    MessageBody: JSON.stringify({
      id: 1,
      name: "Iphone X",
      description: "Phone at Apple",
      value: 15000,
    }),
    MessageAttributes: {
      Product_1: {
        DataType: "String",
        StringValue: "Macbook M1",
      },
      Product_2: {
        DataType: "String",
        StringValue: "iPhone X",
      },
      Product_3: {
        DataType: "String",
        StringValue: "Keyboard",
      },
    },
  };

  sqs.sendMessage(params, (err, data) => {
    if (err) {
      console.log(`Error ${err}`);
    } else {
      console.log(`Success: ${JSON.stringify(data)}`);
    }
  });
};

sendSQS();
