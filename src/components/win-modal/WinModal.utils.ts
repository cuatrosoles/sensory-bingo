// external imports
import $ from "jquery";

export default function shuffled() {
    var parent = $('#grid-container');
    var rows = parent.children();
    var divs = $('#grid-container > div').children();

    var size = divs.length;
    var column = 5;

    // @ts-ignore
    var clone = divs.slice();

    for(let i = 0; i < size; i++) {
        var t = Math.floor(i / column);
        let rightIndex = (5 - t);
        let leftIndex = (t + 1);

        // @ts-ignore
        let currRow = clone.splice(Math.floor(Math.random() * clone.length), 1)[0];
        $(rows[t]).append(currRow);
    }
};