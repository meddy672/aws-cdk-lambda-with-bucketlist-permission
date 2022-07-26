const { S3 } = require('aws-sdk');

exports.handler = async function(event) {
    console.log(JSON.stringify(event, undefined, 2));
    const s3 = new S3();
    const buckets = await s3.listBuckets().promise();
    console.log('Buckets:::', buckets);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            message: 'Hello from the lambda',
        })
    };
}