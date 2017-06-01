var selected_image_src = "";
$(document).ready(function(){
    $(".uploaded_image_container").hover(			
        function (){
        	$(this).css({
           		"border":"1px solid black"
           	});

        	var uploaded_image = $($(this).find("img")[0]);
        	var uploaded_image_src = uploaded_image.attr("src");
        	
        	var selected_image_container = $(".selected_image_container");
        	var selected_image = $(selected_image_container.find("img"));
        	
        	selected_image.attr("src", uploaded_image_src);
        	selected_image_src = uploaded_image_src;
        },
				
        function (){
        	$(this).css({
            	"border":"1px solid white"
            });
        }
    );

    $(".container_01_upload").click(function(){

    });

    $(".container_01_upload").change(function(){
    	console.log("123");
    });


    $(".container_01_next").click(function(){
    	var container_01 = $(".container_01");
    	var container_02 = $(".container_02");

    	container_01.slideUp();
    	container_02.slideDown();
    });

    $(".container_02_back").click(function(){
    	var container_01 = $(".container_01");
    	var container_02 = $(".container_02");

    	container_01.slideDown();
    	container_02.slideUp();
    });

    $(".container_02_next").click(function(){
    	var container_02 = $(".container_02");
    	var container_03 = $(".container_03");
        var Tepsp = $.trim($("#Tensp").val());
        var Giasp = $.trim($("#Giasp").val());
        var Soluong = $.trim($("#Soluong").val());
        var Diachi = $.trim($("#Diachi").val());
        var Tinhtrang = $("#Tinhtrang").val();
        var Thanhpho = $("#Thanhpho").val();
		var validate = Validateform(Tepsp, Giasp, Soluong, Diachi);
		if( validate){
            container_02.slideUp();
            container_03.slideDown();
            $("#showTensp").text(Tepsp);
            $("#showGiasp").text(Giasp);
            $("#showSoluong").text(Soluong);
            $("#showDiachi").text(Diachi);
            if(Tinhtrang == "1"){
                $("#showTinhtrang").text("Mới");
            } else {
                $("#showTinhtrang").text("Cũ");
            }
            switch (Thanhpho){
                case "1":
                    $("#showTinhthanh").text("TP Hồ Chí Minh");
                    break;
                case "2":
                    $("#showTinhthanh").text("Hà Nội");
                    break;
                case "3":
                    $("#showTinhthanh").text("Đồng Nai");
                    break;
                case "4":
                    $("#showTinhthanh").text("Bình Dương");
                    break;
                case "5":
                    $("#showTinhthanh").text("Lâm Đồng");
                    break;
                case "6":
                    $("#showTinhthanh").text("Khánh Hòa");
                    break;
                case "7":
                    $("#showTinhthanh").text("Cần Thơ");
                    break;
                case "":
                    $("#showTinhthanh").text("");
                    break;
            }
		}
    });

    $(".container_03_back").click(function(){
    	var container_02 = $(".container_02");
    	var container_03 = $(".container_03");

    	container_02.slideDown();
    	container_03.slideUp();
    });
    $("#Co").click( function () {
		location.reload();
	    var url = window.location.href;
	    var index = url.lastIndexOf("/");
	    url = url.slice(0, index);
        window.location.replace(url + "/detail");

    });

    $(".container_03_next").click(function(){

    });
    function Validateform(Tepsp, Giasp, Soluong, Diachi) {

        var flag = true;

        if(Tepsp == "" || Tensp.length < 4)
		{
			$("#Tensp_error").text("Tên sản phẩm phải nhiều hơn 4 ký tự");
            flag = false;
		} else {
            $("#Tensp_error").text("");
        }
        if(Giasp == "" || Giasp.length < 5)
        {
            $("#Giasp_error").text("Giá sản phẩm lớn hơn 10k");
            flag = false;
        } else {
            $("#Giasp_error").text("");
        }
        if(Soluong == "" || parseInt(Soluong) < 1 )
        {
            $("#Soluong_error").text("Số lượng phải lớn hơn 0");
            flag = false;
        } else {
            $("#Soluong_error").text("");
        }
        if(Diachi == "" || Diachi.length < 4)
        {
            $("#Diachi_error").text("Vui lòng điền địa chỉ");
            flag = false;
        } else {
            $("#Diachi_error").text("");
        }
        return flag;
    }
});
