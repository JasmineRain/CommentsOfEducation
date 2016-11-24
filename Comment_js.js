/**
 * Created by ylhyr on 2016/11/9.
 */
var grades = [5,5,5,5,5];   //各栏目的星星个数数组 初始值满分5
var score = document.getElementById("score");
var cmt = document.getElementById("words");
$(document).ready(function () {                         //星级评分
    var index = 0;
    var grade = 0;
    var $uls = $(".word_com ul li ul");
    $uls.children("li").click(function () {
        $(this).attr("class","star_on");
        $(this).siblings("li").attr("class","star_on");
        $(this).nextAll("li").attr("class","star_off");
        index = $(this).parent().attr("title");
        grade = $(this).children().text();
        grades[index] = grade;
    });
    score.innerHTML = 100;
    cmt.innerHTML = "该教师讲解清晰，表达清楚，授课内容合理，能够令学生学有所得。";  //初始值xxxx
});