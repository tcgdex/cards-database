import { Card } from "models/database/card";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リオル",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "波動と 呼ばれる 波を 見て 人や ポケモンの 気持ちを 知る。 危険な 相手には 近付かない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フェイント" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558145,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [447],
};

export default card;
