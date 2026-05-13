import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "エリキテル",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "頭の 両わきの ひだには 太陽の 光を 浴びると 発電する 細胞が あるのだ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "エレキック"}, "damage": "30", "cost": ["Lightning"], "effect": {"ja": ""}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [694],
};

export default card;
