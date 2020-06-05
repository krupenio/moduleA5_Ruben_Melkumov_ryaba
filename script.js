const originalTaleText = $.getJSON("https://api.jsonbin.io/b/5e905926172eb643896166e7");
// console.log("originalTaleText", originalTaleText);

const textRyaba = $(".orgText");
// console.log("textRyaba", textRyaba);

const btnInit = $(".j-btnEnter");

btnInit.click(function() {
	textRyaba.html(originalTaleText.responseText);
	//console.log("textRyaba", textRyaba);
})

const var1Node = $(".var1-input");
const var2Node = $(".var2-input");
const var3Node = $(".var3-input");
const var4Node = $(".var4-input");
const var5Node = $(".var5-input");
const var6Node = $(".var6-input");
const speachNode = $(".speach-input");

const btnReplace = $(".j-btnReplace");

const newTextRyaba = $(".orgText");

btnReplace.click(function () {
	const var1 = var1Node.val();
	const var2 = var2Node.val();
	const var3 = var3Node.val();
	const var4 = var4Node.val();
	const var5 = var5Node.val();
	const var6 = var6Node.val();
	const speach = speachNode.val();

	const newTextRyaba = {
	"text":[
	`Жили-были ${var1} да ${var2}`,
	`Была у них ${var3}`,
	`Снесла ${var3} ${var4}, не простое - золотое`,
	`- ${var1} бил, бил - не разбил`,
	`- ${var2} била, била - не разбила`,
	`${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
	`${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
	`${speach}`
	]}

	textRyaba.html(newTextRyaba.text);

})



/*const newTextRyaba = {
	"text":[
	"Жили-были {var1} да {var2}",
	"Была у них {var3}",
	"Снесла {var3} {var4}, не простое - золотое",
	"- {var1} бил, бил - не разбил",
	"- {var2} била, била - не разбила",
	"{var5} бежала, {var6} задела, {var4} упало и разбилось.",
	"{var1} плачет, {var2} плачет, а {var3} кудахчет:",
	"{speach}"
	]}*/