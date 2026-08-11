import { Card } from "models/database/card";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナマコブシ",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "ナマコブシ投げ という 文化は 打ち上げられた ナマコブシを 海に 投げ返す 習慣が 始まり。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札にあるたねポケモンを2枚まで、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "びっくりけん" },
			damage: "60+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手プレイヤーとジャンケンをし、自分が勝ったなら60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558131,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [771],
};

export default card;
