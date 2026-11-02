import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "メガメガニウムex",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 360,
	types: ["Grass"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ジャイアントブーケ" },
			damage: "70+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[G]エネルギーの数×50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864063,
			},
		},
	],

	evolveFrom: {
		ja: "ベイリーフ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [154],

	suffix: "EX",
};

export default card;
