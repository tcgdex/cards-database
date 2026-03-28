import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "Nのヒヒダルマ",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "体内の 炎が 燃え盛るほど パワーが 高まる。 その 温度は １４００度を 超える ことも。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "バックドラフト"}, "cost": ["Colorless", "Colorless"], "damage": "30×", "effect": {"ja": "相手のトラッシュにある基本エネルギーの枚数×30ダメージ。"}}, {"name": {"ja": "ひだるまキャノン"}, "cost": ["Fire", "Fire", "Colorless"], "damage": 90, "effect": {"ja": "このポケモンについているエネルギーをすべてトラッシュし、相手のベンチポケモン1匹にも、90ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "Nのダルマッカ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [555],
};

export default card;
