import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤングース",
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "鋭いキバで なんにでも かみつく。 元々 アローラには 棲んでおらず 他の地方から 連れてこられた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "かみつく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561726,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [734],
};

export default card;
