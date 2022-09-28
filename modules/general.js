import DateTime from './luxon.js';

const general = () => {
  const listMenu = document.querySelector('.book_list_section');
  const addMenu = document.querySelector('.book_add_section');
  const contactMenu = document.querySelector('.book_contact_section');
  const menuElements = [listMenu, addMenu, contactMenu];
  function setActive(index) {
    menuElements.forEach((element, key) => {
      if (key === index) {
        if (!element.classList.contains('nav-link-visited')) {
          element.classList.toggle('nav-link-visited');
        }
      } else if (element.classList.contains('nav-link-visited')) {
        element.classList.remove('nav-link-visited');
      }
    });
  }

  function displayComponent(elmnts) {
    if (elmnts.isArray) {
      elmnts.forEach((elmnt) => {
        const test = elmnt.classList;
        if (test.contains('hidden_item')) {
          test.remove('hidden_item');
        }
      });
    } else {
      const test = elmnts.classList;
      if (test.contains('hidden_item')) {
        test.remove('hidden_item');
      }
    }
  }
  function HideComponent(elmntsParam) {
    const elmnts = Array.from(elmntsParam);
    elmnts.forEach((elmnt) => {
      const test = elmnt.classList;
      if (!test.contains('hidden_item')) {
        test.toggle('hidden_item');
      }
    });
  }

  function showbooklist(e) {
    e.preventDefault();
    displayComponent(document.querySelector('.booklistsection'));
    HideComponent([
      document.querySelector('.add_book_section'),
      document.querySelector('.separator'),
      document.querySelector('.contact'),

    ]);
    setActive(0);
  }
  function showAddForm(e) {
    e.preventDefault();
    displayComponent(document.querySelector('.add_book_section'));
    HideComponent([
      document.querySelector('.contact'),
      document.querySelector('.booklistsection'),

    ]);
    setActive(1);
  }
  function showContact(e) {
    e.preventDefault();
    displayComponent(document.querySelector('.contact'));
    HideComponent([
      document.querySelector('.add_book_section'),
      document.querySelector('.booklistsection'),
    ]);
    setActive(2);
  }

  listMenu.addEventListener('click', showbooklist);
  addMenu.addEventListener('click', showAddForm);
  contactMenu.addEventListener('click', showContact);

  function refreshLatonDateTime() {
    document.querySelector('.date').innerHTML = DateTime.now()
      .setLocale(navigator.language)
      .toLocaleString({
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: 'false',
      });
  }
  setInterval(refreshLatonDateTime, 1000);
};

export default general;