import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤングース",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "長い 胴体の 中身は ほとんど 胃袋。 大食いなので エサ代は バカに ならない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ばっくりバイト" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557039,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [734],
};

export default card;
