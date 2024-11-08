/*
200 OK Standard response for successful HTTP requests
201 Created Request has been fulfilled.New resource created
204 No Content Request processed.No content returned
301 Moved Permanently This and all future requests directed to the given URI
304 Not Modified Resource has not been modified since last requested
400 Bad Request Request cannot be fulfilled due to bad syntax
401 Unauthorized Authentication is possible, but has failed
403 Forbidden Server refuses to respond to request
404 Not Found Requested resource could not be found
500 Internal Server Error Generic error message when server fails
501 Not Implemented Server does not recognize method or lacks ability to fulfill
503 Service Unavailable Server is currently unavailable
*/

const REQUEST_OK = 200;
const REQUEST_SUCCESS = 201;
const REQUEST_FAILED = 500;

const aws_s3_files = [
    { url: 'https://aws-product-videos.s3.us-west-2.amazonaws.com/mov_bbb.mp4' },
    { url: 'https://aws-product-videos.s3.us-west-2.amazonaws.com/01-Abraham-Lincoln.mp4' },
    { url: 'https://aws-product-videos.s3.us-west-2.amazonaws.com/02-Benjamin-Franklin.mp4' },
    { url: 'https://aws-product-videos.s3.us-west-2.amazonaws.com/03-Heinrich-Schlieman.mp4' },
    { url: 'https://aws-product-videos.s3.us-west-2.amazonaws.com/1200-Essential-Words-for-TOEIC.mp4' },
    { url: 'https://aws-product-videos.s3.us-west-2.amazonaws.com/300+Rise+of+an+Empire.mp4' },
    { url: 'https://aws-product-videos.s3.us-west-2.amazonaws.com/de-men-phieu-luu-ky.mp4' },
    { url: 'https://aws-product-videos.s3.us-west-2.amazonaws.com/Hanging-Gardens-of-Babylon.mp4' },
    { url: 'https://aws-product-videos.s3.us-west-2.amazonaws.com/hien-tai-la-nguyen-khi-quoc-gia.mp4' },
    { url: 'https://aws-product-videos.s3.us-west-2.amazonaws.com/loi-day-khong-tu.mp4' },
    { url: 'https://aws-product-videos.s3.us-west-2.amazonaws.com/The+story+about+Archimedes.mp4' },
];

module.exports = {
    REQUEST_OK,
    REQUEST_SUCCESS,
    REQUEST_FAILED
};
