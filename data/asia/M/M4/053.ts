import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スカタンク",
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'ja-jp': "尻尾の 先から くさい 臭いの 液体を 飛ばして 攻撃。 連射すると 臭いは 弱まる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "うしろげり" },
			damage: 40,
			cost: ["Darkness"],
		},
		{
			name: { ja: "スマッシュターン" },
			damage: 100,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876952,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "スカンプー",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [435],
};

export default card;
