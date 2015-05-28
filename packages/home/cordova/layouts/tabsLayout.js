Template.tabsLayout.onCreated(function () {
  var instance = this;

  instance.tabs = [
    {path: 'home', title: "Home", icon:'android-home', iconOn:'ios-home', iconOff:'ios-home-outline' },
    {path: 'list', title: "List", icon:'flame', iconOn:'ios-flame', iconOff:'ios-flame-outline' },
    {path: 'settings', title: "Settings", icon:'ribbon-a', iconOn:'ios-people', iconOff:'ios-people-outline' }
  ];
})

Template.tabsLayout.onRendered(function() {
  if (StatusBar) {
    //Change the status bar in iOS
    StatusBar.styleDefault();
  }
})

Template.tabsLayout.helpers({
  getTabs: function () {
    return Template.instance().tabs;
  }
})
