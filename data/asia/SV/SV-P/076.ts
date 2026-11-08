import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リオル",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "仲間同士で 波動を 出して コミュニケーションを とっている。 一晩中 走り続けられる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "パンチ" },
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: { ja: "とつげき" },
			damage: 50,
			cost: ["Fighting", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587834,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [447],
};

export default card;
