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

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "きりさく"}, "cost": ["Colorless", "Colorless"], "damage": 50}, {"name": {"ja": "ボルテージバースト"}, "cost": ["Lightning", "Lightning", "Colorless"], "damage": "130＋", "effect": {"ja": "相手がすでにとったサイドの枚数×50ダメージ追加。このポケモンにも30ダメージ。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
