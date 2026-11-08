import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤンチャム",
	},

	illustrator: "Minato",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "一生懸命 怖い 顔で 相手を にらみつけるが 頭を なでられると つい にやけてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とつげき" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861336,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861678,
			},
		},
		{
			type: "reverse",
			foil: "loveball",
			thirdParty: {
				cardmarket: 861679,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [674],
};

export default card;
