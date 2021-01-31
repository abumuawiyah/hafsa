class Index {
  constructor() {
    console.log("hello world!");
  }

  insertUsers() {
    const $users = document.getElementsByClassName('users');
    $users[0].innerHTML = `
      <ul>
       <li>Azizi</li>
       <li>Hafsa</li>
       <li>Rumaysa</li>
      </ul>
    `;
  }
}