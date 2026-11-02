import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ボスの指令",
		'zh-tw': "老大的指令（弗拉達利）",
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
		'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586674,
				tcgplayer: 571410,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "None",
};

export default card;
