import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "トウコ",
	},

	illustrator: "yuu",
	category: "Trainer",

	effect: {
		ja: "自分の山札から進化ポケモンとエネルギーを1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 858269,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Promo",
};

export default card;
