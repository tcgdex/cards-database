import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ストリンダーV",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいでん" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから[雷]エネルギーを1枚選び、このポケモンにつける。",
			},
		},
		{
			name: { ja: "ベノムスラップ" },
			damage: 120,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463149,
				tcgplayer: 597268,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [849],
};

export default card;
