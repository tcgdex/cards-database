import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミニリュウ",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	description: {
		ja: "脱皮を 繰り返しては どんどん 大きくなる 生命力 あふれる ポケモン。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ずつき"}, "cost": ["Water", "Lightning"], "damage": 30}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [147],
};

export default card;
