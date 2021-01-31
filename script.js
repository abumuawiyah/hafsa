class Index {
  async insertUserProfile() {
    const api = await fetch('https://dummyapi.io/data/api/user', {
      method: 'GET',
      headers: {
        "app-id": "601638a7689cd964ac9cac7a"
      }
  
});

    const users = await api.json();
    console.log('test', users.data)
    const $profileSection = document.getElementsByClassName('profile');
    const content = users.data.reduce((prev, curr) => {
      if (prev === '') {
        prev = `
          <p>
            ${u.firstName} ${u.lastName}
          </p>
        `;
        return prev;
      }
      prev = prev + `<p>
        ${u.firstName} ${u.lastName}
      </p>
      `;
      return prev;
    }, ``);

    $profileSection[0].innerHTML = content;
  }
}