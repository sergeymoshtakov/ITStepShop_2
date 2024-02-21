//CKEditorFuncNum
$(document).ready(function () {
    var url = window.location.href;
    var split = url.split("CKEditorFuncNum=");
    var currentURL = split[1];
    var funcNum = currentURL[0]+";";
    $(function () {
        $('img').click(function () {
            var fileurl = '/uplods/' + $(this).attr('title');
            window.opener.CKEDITOR.tools.callFunction(funcNum, fileurl);
            window.close();
        }).hover(function () {
            $(this).css('cursor','pointer')
        })
    })
})