import { Card } from "models/database/card";
import Set from "../SM8b";

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
				cardmarket: 551116,
			},
		},
	],

	trainerType: "Tool",
	rarity: "None",
};

export default card;
