import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ケルディオ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "つきぬける"}, "cost": ["Water"], "damage": 20, "effect": {"ja": "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}, {"name": {"ja": "エネリフレクト"}, "cost": ["Water", "Water"], "damage": 70, "effect": {"ja": "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [647],
};

export default card;
