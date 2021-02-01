class Index {
  constructor() {
    console.log("hello world!");
  }

  async insertUsers() {
    const $users = document.getElementsByClassName('users');
    const userApi = await fetch(`https://dummyapi.io/data/api/user`, {
      headers: {
        'app-id': '601638a7689cd964ac9cac7a'
      }
    });
    const users = await userApi.json();
    const { data } = users;
    const content = data.reduce((prev, curr) => {
      if (prev.length === 0) {
        prev = `
          <p>${curr.firstName} (${curr.email})</p>
        `;
        return prev;
      }
      prev = prev + `
        <p>${curr.firstName} (${curr.email})</p>
      `;
      return prev;
    }, ``);
    $users[0].innerHTML = content;
  }
}