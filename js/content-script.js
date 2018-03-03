document.addEventListener('DOMContentLoaded', function()
{
	document.onreadystatechange = function(){
	    $('#imMsgBox').hide();
	    $('#overlayDiv').hide();
		var obj = $("#imMsgBox").find("#imMsgBoxEnterBut");
		obj.hide();
		var btn_close = '<a id="imMsgClose" href="javascript:void(0);" class="btn orangeBtn twoBtn">我知道了</a>';
		obj.parent().append(btn_close);
		$("#imMsgClose").click( () => {
			window.location.href = window.location.href;
		});
	}
});
