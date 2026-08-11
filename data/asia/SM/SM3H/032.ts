import { Card } from "models/database/card";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アローラベトベター",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'ja-jp': "ゴミ問題を 解決 するため よそから 持ちこんだ ベトベターが いつのまにか この姿に なった。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶんれつ" },
			cost: [],
			effect: {
				'ja-jp': "自分の山札にある「アローラベトベター」を1枚、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "トリップヘドロ" },
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561096,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [88],
};

export default card;
