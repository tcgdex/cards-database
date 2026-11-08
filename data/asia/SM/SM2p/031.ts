import { Card } from "models/database/card";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ソルロック",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'ja-jp': "太陽エネルギーが パワーの 源 なので 昼間は 強い。 回転すると 体が 光る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ダブルドロー" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "ソーラーヒート" },
			damage: "20+",
			cost: ["Fighting"],
			effect: {
				'ja-jp': "場にスタジアムが出ているなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561261,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [338],
};

export default card;
