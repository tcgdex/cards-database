import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル マッスグマ",
	},

	illustrator: "Tomowaka",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "長い舌で 獲物を 挑発。  怒った 相手に 強烈な  タックルを おみまい するぞ。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "かじる"}, "damage": "20", "cost": ["Darkness"], "effect": {"ja": ""}}, {"name": {"ja": "ツメできりさく"}, "damage": "50", "cost": ["Darkness"], "effect": {"ja": ""}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ガラル ジグザグマ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [264],
};

export default card;
