import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "アシレーヌ",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "まんたんメロディ" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のポケモン1匹のHPを、すべて回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アクアリターン" },
			damage: 120,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888630,
			},
		},
	],

	evolveFrom: {
		ja: "オシャマリ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [730],
};

export default card;
