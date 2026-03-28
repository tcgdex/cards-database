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

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "せつなぎり"}, "cost": ["Colorless"], "damage": 30, "effect": {"ja": "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}, {"name": {"ja": "ブレイブスラッシュ"}, "cost": ["Metal", "Metal", "Metal", "Colorless"], "damage": 240, "effect": {"ja": "次の自分の番、このポケモンは「ブレイブスラッシュ」が使えない。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
