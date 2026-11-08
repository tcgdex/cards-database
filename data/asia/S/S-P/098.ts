import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "基本フェアリーエネルギー",
		'zh-tw': "伊布",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Normal",

	effect: {
		'ja-jp': "エネルギーカード付き カードボックス メガミュウツーX・メガミュウツーY",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525175,
				tcgplayer: 649920,
			},
		},
	],

	rarity: "Promo",
};

export default card;
