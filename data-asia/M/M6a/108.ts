import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "サンダー",
	},

	illustrator: "mashu",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

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
			type: "holo",
			thirdParty: {
				cardmarket: 908286,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [145],
};

export default card;
