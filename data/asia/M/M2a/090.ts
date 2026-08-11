import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シロナのガブリアスex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "スクリューダイブ" },
			damage: 100,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "のぞむなら、自分の手札が6枚になるように、山札を引く。",
			},
		},
		{
			name: { ja: "リューノバスター" },
			damage: 260,
			cost: ["Fighting", "Fighting"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861333,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "シロナのガバイト",
	},

	retreat: 0,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [445],

	suffix: "EX",
};

export default card;
