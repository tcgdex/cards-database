import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ソルロック",
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'ja-jp': "太陽エネルギーが パワーの 源 なので 昼間は 強い。 回転すると 体が 光る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "コスモビーム" },
			damage: 70,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "自分のベンチに「ルナトーン」がいないなら、このワザは失敗。このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863674,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [338],
};

export default card;
