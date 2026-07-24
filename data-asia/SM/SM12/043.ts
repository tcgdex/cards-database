import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ビブラーバ",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "ハネを 振動させ 超音波を 放つ。 気絶した 獲物を 砂の 中に 生き埋めにして 保存する。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "うるさいはおと" },
			effect: {
				ja: "このポケモンは、相手が手札からサポートを出して使ったとき、その効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "はばたく" },
			damage: 40,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554876,
			},
		},
	],

	evolveFrom: {
		ja: "ナックラー",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [329],
};

export default card;
