import { Card } from "models/database/card";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メタルゴーグル",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンは、相手のポケモンから受けるワザのダメージが「-30」され、相手のワザや特性の効果によるダメカンものらない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558623,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
