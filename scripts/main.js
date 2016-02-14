$(function() {
  var _control = "abcdefghiklmnopqrstuvwxyz1234567890";

  $('#do').click(function(){
    var content = '';
    var _key = $('#key').val().toLowerCase();
    var _content = $('#content').val().toLowerCase();
    var _one = _key[0],
        _two = _key.slice(-1);
    var _s = _control.indexOf(_two) - _control.indexOf(_one);
    for (var x = 0, length = _content.length; x < length; x++) {
      if (_content[x] == ' ') {
        content = content + ' ';
        continue;
      }
      var _i = _control.indexOf(_content[x]);
      var i = _i;
      if ($('#reverse').is(':checked')) {
        i = _i - _s;
      }
      else {
        i = _i + _s;
      }
      if ( i >= _control.length ) {
        i = i - _control.length;
      } else if ( i < 0 ) {
        i = i + _control.length;
      }
      content = content + _control[i];
    }
    $('#content').val(content);
  });
});
