import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "パワータブレット",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "この番、自分の「フュージョン」のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576207,
				tcgplayer: 577431,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Secret Rare",
};

export default card;
