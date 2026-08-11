import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ケムッソ",
	},

	illustrator: "USGMEN",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "葉っぱが 大好物。 ムックルに 襲われたときは お尻の トゲで 撃退する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "むしくい" },
			damage: 20,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861248,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861530,
			},
		},
		{
			type: "reverse",
			foil: "loveball",
			thirdParty: {
				cardmarket: 861531,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [265],
};

export default card;
