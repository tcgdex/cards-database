import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "イルカマン",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		ja: "太古の 遺伝子が 覚醒。 片ヒレで クルーズ船を 軽々 持ち上げる 怪力の 持ち主。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ヴァンガードパンチ" },
			damage: 130,
			cost: ["Water"],
			effect: {
				ja: "このポケモンにも、このポケモンにのっているダメカンの数×10ダメージ。",
			},
		},
		{
			name: { ja: "ダブルアタック" },
			damage: "90×",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×90ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752788,
				tcgplayer: 568357,
			},
		},
	],

	evolveFrom: {
		ja: "ナミイルカ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [964],
};

export default card;
