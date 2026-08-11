import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ボタン",
		'zh-tw': "臺北的皮卡丘",
	},

	illustrator: "yuu",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場のたねポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、手札にもどす。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
