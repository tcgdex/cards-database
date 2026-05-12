import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼクロムex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [{"name": {"ja": "きりさく"}, "damage": "50", "cost": [], "effect": {"ja": ""}}, {"name": {"ja": "ボルテージバースト"}, "damage": "130+", "cost": ["Lightning", "Lightning"], "effect": {"ja": "相手がすでにとったサイドの枚数×50ダメージ追加。このポケモンにも30ダメージ。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
};

export default card;
