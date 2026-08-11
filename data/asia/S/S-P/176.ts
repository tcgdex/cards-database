import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "キノガッサV",
		'zh-tw': "超夢V",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "カウンター",
				'zh-tw': "超念力",
			},
			damage: "20+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "前の相手の番に、このポケモンが受けたワザのダメージと同じダメージ追加。",
			},
		},
		{
			name: {
				ja: "マッハストレート",
				'zh-tw': "轉移破壞",
			},
			damage: 140,
			cost: ["Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 570871,
				tcgplayer: 597374,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [286],
};

export default card;
