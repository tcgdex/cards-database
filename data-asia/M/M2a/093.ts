import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤンチャム",
	},

	illustrator: "Minato",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "一生懸命 怖い 顔で 相手を にらみつけるが 頭を なでられると つい にやけてしまう。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "とつげき"}, "damage": "20", "cost": ["Colorless"], "effect": {"ja": "このポケモンにも10ダメージ。"}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [674],
};

export default card;
