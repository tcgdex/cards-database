import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "Nのダルマッカ",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "寝ているときは 押しても 引いても  けっして 倒れない。 縁起ものの  モチーフとして 人気が 高い。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ころがりタックル"}, "damage": "20", "cost": [], "effect": {"ja": ""}}, {"name": {"ja": "ほのお"}, "damage": "50", "cost": ["Fire", "Fire"], "effect": {"ja": ""}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [554],
};

export default card;
