import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ニドリーノ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "発達した 耳を 立てて まわりの 気配を 探る。 なにかあると すぐに 飛びかかる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "つつく" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "つのドリル" },
			damage: 60,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558345,
			},
		},
	],

	evolveFrom: {
		ja: "ニドラン♂",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [33],
};

export default card;
