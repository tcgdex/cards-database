import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒビキのマグマッグ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "溶岩で できた 体は 冷えて 欠けてしまうこともあるが マグマに 浸かると 治るのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひをはく" },
			damage: 20,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861261,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861556,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 861557,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [218],
};

export default card;
