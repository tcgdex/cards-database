import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "こだわりメット",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが、相手の「ポケモンGX・EX」から受けるワザのダメージは「-30」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558750,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Secret Rare",
};

export default card;
