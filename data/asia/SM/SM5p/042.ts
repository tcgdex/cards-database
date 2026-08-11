import { Card } from "models/database/card";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "鋼鉄のフライパン",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンは、相手のポケモンから受けるワザのダメージが「-30」され、弱点もなくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559792,
			},
		},
	],

	trainerType: "Tool",
	rarity: "None",
};

export default card;
