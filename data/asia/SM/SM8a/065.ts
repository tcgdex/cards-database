import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "メタルゴーグル",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、相手のポケモンから受けるワザのダメージが「-30」され、相手のワザや特性の効果によるダメカンものらない。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558639,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Secret Rare",
};

export default card;
