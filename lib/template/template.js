Template.orionAttributesEpic.rendered = function () {
  console.log('render')
  console.log(this)

    var key = this.data.name;
    console.log(key)
    var parent = $('[data-schema-key="' + key + '"]')
    console.log(parent)
    // Find the element
    var element = parent.find('#epicEditor');
    console.log(element)

    // Epic.create('#epicEditor', {})

      console.log(this.data.value)

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

      console.log(epicEditor)
};

Template.orionAttributesEpicColumn.helpers({
    preview: function () {
      console.log('preview')
        var value = this.value;
        var tmp = document.createElement("DIV");
        var content = value.replace(/<(?:.|\n)*?>/gm, ' ');
        if(content.length > 50) content = content.substring(0, 47).trim() + '...';
        return content;
    }
});