import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ナモのみ",
		'zh-tw': "刺耳果",
		'zh-cn': "刺耳果",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが、相手の[D]ポケモンからワザのダメージを受けるとき、そのダメージは「-60」され、このカードをトラッシュする。",
		'zh-tw': "附有這張卡的寶可夢受到對手的【惡】寶可夢招式的傷害時，那個傷害「-60」點，將這張卡丟棄。",
		'zh-cn': "附有這張卡的寶可夢受到對手的【惡】寶可夢招式的傷害時，那個傷害「-60」點，將這張卡丟棄。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793533,
				tcgplayer: 587679,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
