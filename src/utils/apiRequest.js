import 'whatwg-fetch'

const makeApiRequest = async() => {
  const apiResponse = await fetch('https://testwithfirebaseandreact.firebaseio.com/cartItems/-LKkWJBdAKjB8Uj7BzAM.json');
  return await apiResponse.json()
}

export default makeApiRequest;