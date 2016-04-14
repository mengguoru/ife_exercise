/** @jsx React.DOM */
/**
 *  description :
 *  dependance  :
 *  author      : Administrator
 *  Date        : 2016/4/13 21:08
 */

//var PopLayout = React.createClass({
//    render:function(){
//        return "blalbal";
//    }
//});
//
//ReactDOM.render(
//    <PopLayout />,
//    document.getElementById('popLayout1')
//);
var PopLayout = React.createClass({
    render:function(){
        return React.createElement("div",null,"blalblalba");
    }
});

ReactDOM.render(React.createElement(PopLayout),document.getElementById('my1'));