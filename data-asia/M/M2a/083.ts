import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のダグトリオ",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "地中を 掘りすすんで 相手が 油断しているところを 別の 場所から 攻撃する。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "あなぼこ"}, "effect": {"ja": "このポケモンがいるかぎり、相手の番に、相手のバトルポケモンがベンチにもどるたび、そのポケモンにダメカンを2個のせる。"}}],

	attacks: [{"name": {"ja": "マッドショット"}, "cost": ["Fighting", "Colorless"], "damage": 50}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ロケット団のディグダ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [51],
};

export default card;
