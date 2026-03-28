import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブリザポス",
	},

	illustrator: "mashu",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "蹄から 強力な 冷気を 放つ。 欲しいものは なんでも 力尽くで 奪う 暴れん坊。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "アイスショット"}, "cost": ["Water"], "damage": 20, "effect": {"ja": "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}, {"name": {"ja": "フロストタイフーン"}, "cost": ["Water", "Water", "Water"], "damage": 130, "effect": {"ja": "次の自分の番、このポケモンは「フロストタイフーン」が使えない。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [896],
};

export default card;
