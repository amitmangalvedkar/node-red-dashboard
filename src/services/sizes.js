var sizes = {
    sx: 50, // width of <1> grid square
    sy: 50, // height of <1> grid square
    gx: 7, // gap between groups
    gy: 7, // gap between groups
    cx: 6, // gap between components
    cy: 6, // gap between components
    px: 6, // padding of group's cards
    py: 6  // padding of group's cards
};

sizes.columns = function (group) {
    return parseInt(group.header.config.width);
};

if (window.innerWidth < 350) {
    sizes.sx = sizes.sy = 45;
}

angular.module('ui').value('uiSizes', sizes);
