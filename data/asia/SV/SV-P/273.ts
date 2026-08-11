import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "きずぐすり",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		ja: "自分のポケモン1匹のHPを「30」回復する。",
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
