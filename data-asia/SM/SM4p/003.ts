import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "アゴジムシ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "とりポケモンに 襲われないよう でんきポケモンが 棲む 場所に 集まっていることが 多い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はさむ" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560036,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [736],
};

export default card;
