var Dom = function Dom() {};

Dom.prototype.get = function(selector) {
  return document.querySelector(selector);
};

Dom.prototype.getAll = function(selector) {
  return document.querySelectorAll(selector);
};

Dom.prototype.children = function(selector) {
  return this.get(selector).children;
};

Dom.prototype.isFirstChild = function(selector) {
  var element = this.get(selector);
  // return element.parentNode.firstElementChild == element;

  return element.previousElementSibling == undefined;
};

Dom.prototype.isLastChild = function(selector) {
  var element = this.get(selector);
  // return element.parentNode.lastElementChild == element;

  return element.nextElementSibling == undefined;
};

Dom.prototype.create = function(newElementObj) {
  var newElement = document.createElement(newElementObj.tagName);

  if (newElementObj.attributes) {
    for (var attr in newElementObj.attributes) {
      var attrKey = attr;
      var attrValue = newElementObj.attributes[attr];
      newElement[attrKey] = attrValue;
    }
  }

  return newElement;
};

Dom.prototype.add = function(parentNodeSelector, newElementObj) {
  var parentNode = this.get(parentNodeSelector);

  var newElement = this.create(newElementObj);

  parentNode.appendChild(newElement);
};

Dom.prototype.insert = function(parentNodeSelector, newElementObj, index) {
  var parentNode = this.get(parentNodeSelector);

  var newElement = this.create(newElementObj);

  var elementBefore = parentNode.children[index];

  parentNode.insertBefore(newElement, elementBefore);
};

Dom.prototype.remove = function(selector) {
  var elements = this.getAll(selector);

  for(var i = 0; i < elements.length; i++) {
    var parentNode = elements[i].parentNode;

    parentNode.removeChild(elements[i]);
  }
};

Dom.prototype.matches = function(element, selector) {
  if (element.mozMatchesSelector) {
    return element.mozMatchesSelector(selector);
  }

  if (element.webkitMatchesSelector) {
    return element.webkitMatchesSelector(selector);
  }
};

Dom.prototype.on = function(selector, eventName, callback) {
  if (this.events == undefined) {
    this.events = {};
  }

  var element = this.get(selector);

  if (this.events[selector + ':' + eventName] == undefined) {
    this.events[selector + ':' + eventName] = [];
  }

  this.events[selector + ':' + eventName].push(callback);

  element.addEventListener(eventName, callback);
};

Dom.prototype.off = function(selector, eventName) {
  var element = this.get(selector);

  if (this.events != undefined && this.events[selector + ':' + eventName] != undefined) {
    for (var i = 0; i < this.events[selector + ':' + eventName].length; i++) {
      var callback = this.events[selector + ':' + eventName][i];

      element.removeEventListener(eventName, callback);
    }

    this.events[selector + ':' + eventName] = [];
  }
};

Dom.prototype.fire = function(selector, eventName) {
  var element = this.get(selector);
  var element_event = new Event(eventName);

  element.dispatchEvent(element_event);
};
