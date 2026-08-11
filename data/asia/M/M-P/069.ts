import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "パワープロテイン",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "この番、自分の[F]ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 867912,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Promo",
};

export default card;
