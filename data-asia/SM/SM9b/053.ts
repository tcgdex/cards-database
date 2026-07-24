import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "鋼鉄のフライパン",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、相手のポケモンから受けるワザのダメージが「-30」され、弱点もなくなる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558171,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
