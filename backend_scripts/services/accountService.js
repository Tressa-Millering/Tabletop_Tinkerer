const UserAccountDetailsRepository = require('../repositories/userAccountDetailsRepository');
const logger = require('../logger/logger');

const getAccountDetails = async (request, response) => {
    const { userId } = request.query;

    const userAccountDetailsRepository = new UserAccountDetailsRepository();
    const existingUserAccountDetails = await userAccountDetailsRepository.select(userId);
    if (existingUserAccountDetails) {
        logger.info(`existingUserAccountDetails ${existingUserAccountDetails.first_name}`);
        const {method, url} = request;

        console.log(`
Account data requested!
Method: ${method}
URL: ${url}
Fetching current account data...`);

        return response.status(200).json({
            message: "Account data fetched successfully. Data: ", method, url,
            id: existingUserAccountDetails.id,
            userId: existingUserAccountDetails.user_id,
            firstName:existingUserAccountDetails.first_name,
            lastName: existingUserAccountDetails.last_name,
            address1: existingUserAccountDetails.address_1,
            address2:existingUserAccountDetails.address_2,
            city: existingUserAccountDetails.city,
            state: existingUserAccountDetails.state,
            zipCode: existingUserAccountDetails.zip_code,
            phoneNumber: existingUserAccountDetails.phone_number,
            email: existingUserAccountDetails.email
        });
    } else {
        logger.info('No data for that account.');
        return response.status(204).json({});
    }
};

const createAccountDetails = async (request, response) => {
    const {method, url, body} = request;
    const {
        userId, firstName, lastName, address1, address2,
        city, state, zipCode, phoneNumber, email
    } = request.body;
    const userAccountDetailsRepository = new UserAccountDetailsRepository();

    const existingUserAccountDetails = await userAccountDetailsRepository.select(userId);

    //formatted like this to avoid long lines but still have output formatted correctly
    console.log(`
Account update requested!
Data sent: ${JSON.stringify(body)}
Method: ${JSON.stringify(method)}
URL: ${JSON.stringify(url)}`);

    if (!existingUserAccountDetails) {
        const userAccountDetails = await userAccountDetailsRepository.insert(
            userId, firstName, lastName, address1, address2,
            city, state, zipCode, phoneNumber, email
        );

        return response.status(201).json({
            message: "Account details created successfully. Data: ", ...body, method, url,
            id: userAccountDetails.id,
            userId: userId
        })
    } else if (existingUserAccountDetails) {
        const userAccountDetails = await userAccountDetailsRepository.update(
            userId, firstName, lastName, address1, address2,
            city, state, zipCode, phoneNumber, email
        );
        return response.status(200).json({
            message: "Account updated successfully. Data: ", ...body, method, url,
            id: userAccountDetails.id,
            userId: userId
        })
    }

};

module.exports = { createAccountDetails, getAccountDetails }
