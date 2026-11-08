import { Card } from "models/database/card";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガシグナル",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から「メガシンカex」を1枚選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 839232,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Promo",
};

export default card;
