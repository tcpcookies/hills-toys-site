/* ============ Hills Toys (濠盛) B2B site ============ */
// 联系人：苏超汉 (Andy)，+86 18565619123（WhatsApp 已确认使用此号码）
// 邮箱：andy@hillstoys.cn
const WHATSAPP_NUMBER = '8618565619123';

(function () {
  var form = document.getElementById('inquiry-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var fd = new FormData(form);
    var lines = [
      'Hello Hills Toys,',
      '',
      'Name: ' + (fd.get('name') || '-'),
      'Country: ' + (fd.get('country') || '-'),
      'Business Type: ' + (fd.get('type') || '-'),
      'Product Interest: ' + (fd.get('product') || '-'),
      '',
      'Message: ' + (fd.get('message') || '-')
    ];
    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
    window.open(url, '_blank', 'noopener');
  });
})();
