var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HelloComponent = (function (_super) {
    __extends(HelloComponent, _super);
    function HelloComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloComponent.prototype.render = function () {
        return React.createElement("div", null,
            "Hello ",
            this.props.data);
    };
    return HelloComponent;
}(React.Component));
//# sourceMappingURL=HelloWorld.js.map