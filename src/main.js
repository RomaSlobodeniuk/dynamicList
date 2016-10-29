'use strict';

var render = function(list) {
    var nameList = list.map(function(element) {
        //img
        let img = document.createElement('img');
        img.className = 'media-object';
        img.src = element.src;
        img.alt = element.alt;
        //a
        let node_a = document.createElement('a');
        node_a.href = element.href;
        node_a.appendChild(img);
        //div_1
        let node_a_div_1 = document.createElement('div');
        node_a_div_1.className = 'media-left';
        node_a_div_1.appendChild(node_a);
        //h3
        let h3 = document.createElement('h3');
        h3.className = 'media-heading';
        h3.innerHTML = element.name;
        //h4
        let h4 = document.createElement('h4');
        h4.innerHTML = element.description;
        //span
        let span = document.createElement('span');
        span.className = 'label label-info';
        span.innerHTML = `Дата: ${element.date}`;
        //div_2
        let node_div_2 = document.createElement('div');
        node_div_2.className = 'media-body';
        node_div_2.appendChild(h3);
        node_div_2.appendChild(h4);
        node_div_2.appendChild(span);
        //div_media
        let div_media_node = document.createElement('div');
        div_media_node.className = 'media';
        div_media_node.appendChild(node_a_div_1);
        div_media_node.appendChild(node_div_2);
        //div_jumbotron
        let div_jumbotron_node = document.createElement('div');
        div_jumbotron_node.className = 'jumbotron';
        div_jumbotron_node.appendChild(div_media_node);
        //div_col_sm_12
        let div_col_sm_12_node = document.createElement('div');
        div_col_sm_12_node.className = 'col-sm-12';
        div_col_sm_12_node.appendChild(div_jumbotron_node);

        return div_col_sm_12_node;
    });
    return nameList;
};

window.onload = function() {
    let container = document.createElement('div');
    container.className = 'row';
    render(list).forEach(function(element) {
        container.appendChild(element);
    });

    let listGgroup = document.querySelector('.to_replace');
    listGgroup.replaceChild(container, listGgroup.childNodes[0]);
};