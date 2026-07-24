import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ワニノコ",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "小さいながらも 暴れん坊。 目の前で 動くものが あれば とにかく かみついてくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 10,
			cost: ["Water"],
		},
		{
			name: { ja: "かみつく" },
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560177,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [158],
};

export default card;
