import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "サンダー",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "電気を 自在に 操る。 真っ黒な 雷雲の 中に 巣があると 言い伝えられている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はじけるはばたき" },
			effect: {
				ja: "自分の場に「ファイヤー」「フリーザー」がいるなら、自分の番に1回使える。自分の手札から「基本[L]エネルギー」を1枚選び、このポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "らいごう" },
			damage: 210,
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンにも60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908227,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [145],
};

export default card;
