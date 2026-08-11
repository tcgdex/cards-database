import { Card } from "models/database/card";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レパルダスV",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かくしヅメ" },
			effect: {
				'ja-jp': "自分の番に、このカードを手札からベンチに出したとき、1回使える。おたがいの場のポケモンについている「ポケモンのどうぐ」を1枚選び、トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "シャドーリッパー" },
			damage: 110,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "のぞむなら、このポケモンと、ついているすべてのカードを、手札にもどす。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560954,
				tcgplayer: 569209,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [510],
};

export default card;
