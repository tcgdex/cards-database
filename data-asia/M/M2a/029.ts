import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "レシラムex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "きりさく"}, "cost": ["Colorless", "Colorless"], "damage": 50}, {"name": {"ja": "ブレイズバースト"}, "cost": ["Fire", "Fire", "Colorless"], "damage": "130＋", "effect": {"ja": "相手がすでにとったサイドの枚数×50ダメージ追加。このポケモンについているエネルギーを1個選び、トラッシュする。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
