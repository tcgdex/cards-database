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

	attacks: [{"name": {"ja": "ひをはく"}, "cost": ["Fire"], "damage": 20}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [218],
};

export default card;
