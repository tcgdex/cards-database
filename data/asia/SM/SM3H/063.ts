import { Card } from "models/database/card";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ムキムキダンベル",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけている1進化ポケモンの最大HPは「40」大きくなる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561127,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Secret Rare",
};

export default card;
