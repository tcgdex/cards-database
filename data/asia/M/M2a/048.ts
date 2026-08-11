import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "シビビール",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "丸い 模様が 発電 器官。 相手に 巻きついてから 模様を 押しつけて 電気を 流すのだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エレキダイナモ" },
			effect: {
				ja: "自分のトラッシュから[雷]エネルギーを1枚選び、自分のベンチポケモンにつける。この特性は、自分の番に1回使える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ライトニングボール" },
			damage: 50,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861291,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861606,
			},
		},
		{
			type: "reverse",
			foil: "quickball",
			thirdParty: {
				cardmarket: 861607,
			},
		},
	],

	evolveFrom: {
		ja: "シビシラス",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [603],
};

export default card;
