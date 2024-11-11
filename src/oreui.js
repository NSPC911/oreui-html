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
    element.setAttribute("oreui-state", "disabled");
  },
  becomeEnabled: function (element) {
    element.setAttribute("oreui-state", "enabled");
  },
  toggleDisabled: function (element) {
    if (element.getAttribute("oreui-state") === "enabled") {
      element.setAttribute("oreui-state", "disabled");
    } else {
      element.setAttribute("oreui-state", "enabled");
    }
  },
};

window.OreUI = OreUI;
