var onclicks = {};

var treeNum = 0;


class Tree {
  constructor (height = 100, type = "regular") {
    this.height = height;
    this.type = type;
  }
  summon () {
    treeNum++;
  if (this.type === "regular") {
    $("#trees").append("<img id=" + treeNum + " src="+"https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Trees-PNG-Clipart/Tree_Cartoon_PNG_Clip_Art_Image.png?m=1629818656"+">");
  } else if (this.type === "pine") {
    $("#trees").append("<img id=" + treeNum + " src="+"https://www.onlygfx.com/wp-content/uploads/2021/08/pine-tree-drawing-5061.svg"+">");
  }
  $("#delete").append("<option id="+"tree"+treeNum+" value="+treeNum+">Tree"+treeNum+"</option>");
  $("#"+treeNum).css({
      "height": this.height,
      "width": this.height
    });
  }
}
var treeHeight = parseInt($("#height").val());
var treeType = $("#type").val();
var deleteValue;
var mainOnclick;

setInterval(function () {
  treeHeight = parseInt($("#height").val());
  treeType = $("#type").val();
  deleteValue = $("#delete").val();
  mainOnclick = () => onclicks["onclick" + deleteValue];
  mainOnclick = function () {
      $("#"+deleteValue).remove();
      $("#tree"+deleteValue).remove();
  }
});

setInterval(function () {
  $("#deleteButton").attr("onclick", "mainOnclick();");
}, 10);


function create(height, type) {
  let tree = new Tree(height, type);
  tree.summon();
}
