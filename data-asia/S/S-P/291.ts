import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "メルメタルV",
	},

	illustrator: "sadaji",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アームチャージ" },
			damage: 50,
			cost: ["Metal", "Metal"],
			effect: {
				ja: "のぞむなら、自分の手札から[M]エネルギーを1枚選び、このポケモンにつける。",
			},
		},
		{
			name: { ja: "メガトンパンチ" },
			damage: 140,
			cost: ["Metal", "Metal", "Metal"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 664346,
				tcgplayer: 597464,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [809],
};

export default card;
