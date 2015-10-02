Template.orionAttributesEpic.rendered = function () {
  log('render')
  log(this)

    var key = this.data.name;
    log(key)
    var parent = $('[data-schema-key="' + key + '"]')
    log(parent)
    // Find the element
    var element = parent.find('#epicEditor');
    log(element)

    // Epic.create('#epicEditor', {})

      log(this.data.value)

      element.code(this.data.value)

      var opts = {
        clientSideStorage: false,
         focusOnLoad: true,
         localStorageName: 'otherName',
         string: {
          togglePreview: 'Toggle Preview Mode',
          toggleEdit: 'Toggle Edit Mode',
          toggleFullscreen: 'Enter Fullscreen'
        },
      }

      var epicEditor = Epic.create('#epicEditor', opts);

      var editor = new EpicEditor(opts).load();

      log(epicEditor)
};

Template.orionAttributesEpicColumn.helpers({
    preview: function () {
      log('preview')
        var value = this.value;
        var tmp = document.createElement("DIV");
        var content = value.replace(/<(?:.|\n)*?>/gm, ' ');
        if(content.length > 50) content = content.substring(0, 47).trim() + '...';
        return content;
    }
});