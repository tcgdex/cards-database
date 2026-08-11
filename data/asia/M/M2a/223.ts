import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガリザードンXex",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 360,
	types: ["Fire"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "インフェルノX" },
			damage: "90×",
			cost: ["Fire", "Fire"],
			effect: {
				'ja-jp': "自分の場のポケモンについている[R]エネルギーを好きなだけトラッシュし、その枚数×90ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861466,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "リザード",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [6],

	suffix: "EX",
};

export default card;
