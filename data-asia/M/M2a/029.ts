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

	stage: "Basic",

	attacks: [{"name": {"ja": "きりさく"}, "damage": "50", "cost": [], "effect": {"ja": ""}}, {"name": {"ja": "ブレイズバースト"}, "damage": "130+", "cost": ["Fire", "Fire"], "effect": {"ja": "相手がすでにとったサイドの枚数×50ダメージ追加。このポケモンについているエネルギーを1個選び、トラッシュする。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
};

export default card;
