"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_class_1 = require("./default-class");
const xmlns_1 = require("./xmlns");
function polyline(g, poly, class_ = default_class_1.DEFAULT_CLASS, delay) {
    if (poly.length < 2) {
        return [];
    }
    let $path = document.createElementNS(xmlns_1.XMLNS, 'path');
    let d = `M${poly[0][0]} ${poly[0][1]} L`;
    for (let i = 0; i < poly.length; i++) {
        d += `${poly[i][0]} ${poly[i][1]} `;
    }
    $path.setAttributeNS(null, "d", d);
    if (class_) {
        $path.setAttributeNS(null, "class", class_);
    }
    g.appendChild($path);
    if (delay) {
        setTimeout(() => $path.remove(), delay);
    }
    return [$path];
}
exports.polyline = polyline;
//# sourceMappingURL=polyline.js.map