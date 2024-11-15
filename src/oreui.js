const OreUI = {
  becomeActive: function (element) {
    element.setAttribute("oreui-state", "active");
  },
  becomeInactive: function (element) {
    element.setAttribute("oreui-state", "inactive");
  },
  toggleActive: function (element) {
    if (element.getAttribute("oreui-state") === "active") {
      element.setAttribute("oreui-state", "inactive");
    } else {
      element.setAttribute("oreui-state", "active");
    }
  },
  becomeDisabled: function (element) {
    element.setAttribute("disabled", true);
  },
  becomeEnabled: function (element) {
    element.removeAttribute("disabled");
  },
  toggleDisabled: function (element) {
    if (element.hasAttribute("disabled")) {
      element.removeAttribute("disabled");
    } else {
      element.setAttribute("disabled", true);
    }
  },
  getCurrentState: function (element) {
    if (element.hasAttribute("disabled")) {
      return "disabled";
    } else if (element.hasAttribute("oreui-state")) {
      return element.getAttribute("oreui-state");
    } else {
      return "inactive"
    }
  },
  isActive: function (element) {
    if (element.hasAttribute("oreui-state")) {
      return element.getAttribute("oreui-state") === "active";
    } else {
      return false;
    }
  },
  isDisabled: function (element) {
    if (element.hasAttribute("disabled")) {
      return element.getAttribute("disabled") === "true";
    } else {
      return false;
    }
  },
  getColor: function (element) {
    return element.getAttribute("oreui-color");
  },
  getActiveColor: function (element) {
    if (element.hasAttribute("oreui-active-color")) {
      return element.getAttribute("oreui-active-color");
    } else {
      return element.getAttribute("oreui-color");
    }
  },
  getDisabledColor: function (element) {
    if (element.hasAttribute("oreui-disabled-color")) {
      return element.getAttribute("oreui-disabled-color");
    } else {
      return "dark"
    }
  },
  setColor: function (element, color) {
    element.setAttribute("oreui-color", color);
  },
  setActiveColor: function (element, color) {
    element.setAttribute("oreui-active-color", color);
  },
  setDisabledColor: function (element, color) {
    element.setAttribute("oreui-disabled-color", color);
  },
};

window.OreUI = OreUI;
