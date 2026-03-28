import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメラ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "すいとる"}, "cost": ["Water", "Psychic"], "damage": 30, "effect": {"ja": "このポケモンのHPを「30」回復する。"}}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [704],
};

export default card;
