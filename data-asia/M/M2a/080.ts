import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "レイスポス",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "視覚 以外の 五感を 使い 様子を 探る。 蹴られたものは 魂を 抜かれてしまうという。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ホロウショット"}, "damage": "30", "cost": ["Psychic"], "effect": {"ja": ""}}, {"name": {"ja": "ファントムビット"}, "damage": "", "cost": ["Psychic", "Psychic"], "effect": {"ja": "このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン1匹に、ダメカンを12個のせる。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [897],
};

export default card;
