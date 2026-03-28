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

	attacks: [{"name": {"ja": "ホロウショット"}, "cost": ["Psychic"], "damage": 30}, {"name": {"ja": "ファントムビット"}, "cost": ["Psychic", "Psychic", "Colorless"], "effect": {"ja": "このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン1匹に、ダメカンを12個のせる。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [897],
};

export default card;
