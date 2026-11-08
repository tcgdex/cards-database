import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モルペコex",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ホイールドロー" },
			cost: ["Darkness"],
			effect: {
				'ja-jp': "自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。",
			},
		},
		{
			name: { ja: "はらぺこボンバー" },
			damage: "40+",
			cost: ["Darkness", "Darkness"],
			effect: {
				'ja-jp': "このポケモンにのっているダメカンの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888660,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Special illustration rare",
	dexId: [877],

	suffix: "EX",
};

export default card;
