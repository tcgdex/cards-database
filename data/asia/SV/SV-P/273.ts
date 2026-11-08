import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "きずぐすり",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のポケモン1匹のHPを「30」回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 838367,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
