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

	attacks: [{"name": {"ja": "ひをはく"}, "damage": "20", "cost": ["Fire"], "effect": {"ja": ""}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [218],
};

export default card;
