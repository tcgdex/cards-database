import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ソルロック",
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "太陽エネルギーが パワーの 源 なので 昼間は 強い。 回転すると 体が 光る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "コスモビーム" },
			damage: 70,
			cost: ["Fighting"],
			effect: {
				ja: "自分のベンチに「ルナトーン」がいないなら、このワザは失敗。このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861330,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861670,
			},
		},
		{
			type: "reverse",
			foil: "duskball",
			thirdParty: {
				cardmarket: 861671,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [338],
};

export default card;
