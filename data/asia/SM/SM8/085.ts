import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "こだわりメット",
	},

	illustrator: "Eske Yoshinob",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが、相手の「ポケモンGX・EX」から受けるワザのダメージは「-30」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558724,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
