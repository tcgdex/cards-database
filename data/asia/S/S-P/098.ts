import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "基本フェアリーエネルギー",
		'zh-tw': "伊布",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Normal",

	effect: {
		ja: "エネルギーカード付き カードボックス メガミュウツーX・メガミュウツーY",
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
