# DM122-PWA-GROUNDWORK


//
async function getUser(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}`);

  const data = await response.json();

  console.log(data);
}

getUser('tidanilocarvalho');

console.log('Is this the end?')
//