import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "モルペコex",
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
				ja: "自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。",
			},
		},
		{
			name: { ja: "はらぺこボンバー" },
			damage: "40+",
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "J",
	rarity: "Special illustration rare",
	dexId: [877],

	suffix: "EX",

	thirdParty: {
		cardmarket: 888660,
	},
};

export default card;
