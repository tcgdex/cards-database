import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "フクスロー",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "刃羽根と 呼ばれる 鋭い 羽根を 敵や 獲物に 投げつける。 ほぼ 百発百中 だ。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "このは"}, "damage": 20, "cost": ["Grass"]}, {"name": {"ja": "フェザーショット"}, "cost": ["Colorless", "Colorless", "Colorless"], "effect": {"ja": "このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン1匹に、90ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "モクロー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [723],

	thirdParty: {
		cardmarket: 867925,
		tcgplayer: 674330,
	},
};

export default card;