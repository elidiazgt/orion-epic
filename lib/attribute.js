orion.attributes.registerAttribute('epic', {
  template: 'orionAttributesEpic',
  columnTemplate: 'orionAttributesEpicColumn',
  getSchema: function(options) {
    console.log(options)
    return {
      type: String
    };
  },
  valueOut: function() {
    // return this.find('.epic').code();
    var markdown = document.querySelector('.epicarea').value;

    /*var converter = new Showdown.converter();
    log(converter)*/
    //log(HTML.Raw(converter.makeHtml(markdown)).value);
    console.log(markdown)
    return markdown
    // HTML.Raw(converter.makeHtml(markdown)).value
  }
});