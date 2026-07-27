import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "コータス",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "甲羅の中の 炎が 消えると 死んでしまう。 家で 育てるには 常に 燃やすものが いるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もえるけいてき" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の山札を上から4枚トラッシュし、その中にある[炎]エネルギーをすべて、自分のポケモンに好きなようにつける。",
			},
		},
		{
			name: { ja: "やきこがす" },
			damage: 80,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558980,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [324],
};

export default card;
