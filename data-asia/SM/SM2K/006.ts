import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "コソクムシ",
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "臆病で たくさんの 足を ばたつかせ 必死に 逃げまわる。 逃げたあとは ピカピカ 綺麗。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "チョロにげ" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			},
		},
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561472,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [767],
};

export default card;
