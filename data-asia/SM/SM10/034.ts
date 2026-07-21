import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ドガース",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "薄い バルーン状の 体に 猛毒の ガスが つまっている。 近くに 来ると くさい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "くさいにおい" },
			cost: ["Colorless"],
			effect: {
				ja: "おたがいのバトルポケモンをそれぞれこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557389,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [109],
};

export default card;
