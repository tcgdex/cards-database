import { Card } from "models/database/card";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "鋼鉄のフライパン",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンは、相手のポケモンから受けるワザのダメージが「-30」され、弱点もなくなる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559813,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Secret Rare",
};

export default card;
