import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ボスの指令",
		'zh-tw': "老大的指令（赤日）",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Trainer",

	effect: {
		ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
		'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687812,
				tcgplayer: 571788,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Ultra Rare",
};

export default card;
