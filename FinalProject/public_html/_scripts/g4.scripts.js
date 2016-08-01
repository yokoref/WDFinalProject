/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
    $("#lesen").click(function() {
        $.ajax({
            url : "_assets/g4.txt",
            dataType: "text",
            success : function (data) {
                $(".text").html(data);
            }
        });
    });
}); 