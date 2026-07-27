import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "バオップ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "知能が 高く 木の実は 焼いてから 食べる 習性。 人の 手伝いを 好んでいる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほのお" },
			damage: 10,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561077,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [513],
};

export default card;
