const s3 = require('./s3');

const uploadCsv = async (csv, Key) => {
  const params = {
    Bucket: process.env.BUCKET,
    ContentType: 'text/csv',
    Key,
    Body: csv,
    ACL: 'private',
  };

  const uploadPromise = s3.upload(params).promise();
  return await uploadPromise;
};

module.exports = {
  uploadCsv,
};
