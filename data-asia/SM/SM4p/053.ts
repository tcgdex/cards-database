import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "ソルロック",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "太陽エネルギーが パワーの 源 なので 昼間は 強い。 回転すると 体が 光る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ダブルドロー" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "ソーラーヒート" },
			damage: "20+",
			cost: ["Fighting"],
			effect: {
				ja: "場にスタジアムが出ているなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560086,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [338],
};

export default card;
