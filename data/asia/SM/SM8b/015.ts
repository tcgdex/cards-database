import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒートロトム",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'ja-jp': "プラズマで できた 体を 持つ。 電化製品に 潜りこみ 悪さを することで 知られている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ロトモーター" },
			effect: {
				'ja-jp': "自分のトラッシュに「ポケモンのどうぐ」が9枚以上あるなら、このポケモンが使うワザに必要なエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヒートブラスト" },
			damage: 80,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550561,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [479],
};

export default card;
