import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "アマカジ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "甘く 美味しそうな 匂いのせいで とりポケモンに 狙われるが あまり 賢くないので 気に していない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はねる" },
			damage: 10,
			cost: ["Grass"],
		},
		{
			name: { ja: "かいてんアタック" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 543451,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Rare Holo",
	dexId: [761],
};

export default card;
