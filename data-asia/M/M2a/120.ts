import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "マギアナ",
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "およそ ５００年前 科学者に  よって 作られた。 ソウルハートと  呼ばれる パーツが 本体なのだ。",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "オートヒール"}, "effect": {"ja": "このポケモンがバトル場にいるかぎり、自分の手札からエネルギーをポケモンにつけるたび、そのポケモンのHPを「90」回復する。"}}],

	attacks: [{"name": {"ja": "スパイクドロー"}, "damage": "20", "cost": ["Colorless"], "effect": {"ja": "自分の山札を2枚引く。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [801],
};

export default card;
