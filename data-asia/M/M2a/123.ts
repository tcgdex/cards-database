import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホップのザシアンex",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],

	stage: "Basic",

	attacks: [{"name": {"ja": "せつなぎり"}, "damage": "30", "cost": ["Colorless"], "effect": {"ja": "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}, {"name": {"ja": "ブレイブスラッシュ"}, "damage": "240", "cost": ["Metal", "Metal", "Metal"], "effect": {"ja": "次の自分の番、このポケモンは「ブレイブスラッシュ」が使えない。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
};

export default card;
