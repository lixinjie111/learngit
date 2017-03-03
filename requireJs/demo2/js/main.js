System.register("great_module", [], function() {
  "use strict";
  var __moduleName = "great_module";
  var firstName = 'Dan';
  var lastName = 'Woodson';
  var year = 1981;
  function crazyAlert() {
    var msg = arguments[0] !== (void 0) ? arguments[0] : 'yes it is';
    alert('This is crazy: ' + msg);
  }
  return {
    get firstName() {
      return firstName;
    },
    get lastName() {
      return lastName;
    },
    get year() {
      return year;
    },
    get crazyAlert() {
      return crazyAlert;
    }
  };
});
var $__0 = $traceurRuntime.assertObject(System.get("great_module")),
    firstName = $__0.firstName,
    crazyAlert = $__0.crazyAlert;
crazyAlert(firstName);
crazyAlert();
