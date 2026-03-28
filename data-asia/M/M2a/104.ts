import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のニューラ",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "自分が 目立たないよう 暗闇に まぎれて 獲物に 襲いかかる とても ずる賢い ポケモン。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ひっかく"}, "cost": ["Darkness"], "damage": 20}, {"name": {"ja": "ねくびをかく"}, "cost": ["Darkness", "Darkness"], "effect": {"ja": "相手のベンチポケモン1匹に、そのポケモンにのっているダメカンの数×20ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [215],
};

export default card;
