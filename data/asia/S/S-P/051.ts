import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "きずぐすり",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のポケモン1匹のHPを「30」回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463164,
				tcgplayer: 597271,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
