const axios = require('axios');

export const recipeCalling = async (query) => {
  try {
    const options = {
      method: 'GET',
      url: `/recipe/${query}`
    };
    const response = await axios.request(options);

    if (response.data.status === 'success') {
      console.log('success');
    } else {
      console.log('failure');
    }
  } catch (error) {
    console.log(error);
  }
};
