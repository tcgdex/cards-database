import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "げんきのハチマキ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが使うワザの、相手のバトルポケモンへのダメージは「＋10」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463184,
				tcgplayer: 597274,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
