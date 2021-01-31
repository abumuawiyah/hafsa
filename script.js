class Index {
  async insertUserProfile() {
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const userProfile = await api.json();
    const $profileSection = document.getElementsByClassName('profile');
    $profileSection[0].innerHTML = `
      <p>
        User ID: ${userProfile.userId}
      </p>
      <p>
        ID : ${userProfile.id}
      </p>
      <p>
        Title : ${userProfile.title}
      </p>
    `;
  }
}