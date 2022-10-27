const drawerBtnElement = document.getElementById('drawer-btn')
const mobileDarwerElement = document.getElementById('mobile-drawer')

function toggleDrawer() {
  console.log('in')
  mobileDarwerElement.classList.toggle('open')
}

drawerBtnElement.addEventListener('click', toggleDrawer)
