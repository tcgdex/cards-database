import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ボタン",
		'zh-tw': "臺北的皮卡丘",
	},

	illustrator: "yuu",
	category: "Trainer",

	effect: {
		ja: "自分の場のたねポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、手札にもどす。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
