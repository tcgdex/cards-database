import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュラルドン",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "金属の ボディは 頑丈だが 熱が こもってしまうので 尻尾の スリットから 放熱している。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ぶちかます"}, "cost": ["Metal"], "damage": 30}, {"name": {"ja": "レイジングハンマー"}, "cost": ["Metal", "Metal", "Colorless"], "damage": "80＋", "effect": {"ja": "このポケモンにのっているダメカンの数×10ダメージ追加。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [884],
};

export default card;
