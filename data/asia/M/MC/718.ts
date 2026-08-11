import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "トウコ",
	},

	illustrator: "yuu",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から進化ポケモンとエネルギーを1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864020,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "None",
};

export default card;
