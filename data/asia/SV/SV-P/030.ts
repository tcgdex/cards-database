import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ペパー",
		'zh-tw': "榛果球",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「グッズ」と「ポケモンのどうぐ」を1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587787,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
