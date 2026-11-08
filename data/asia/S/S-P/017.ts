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
				cardmarket: 462984,
				tcgplayer: 597237,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
