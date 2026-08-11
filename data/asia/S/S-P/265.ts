import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピカチュウVMAX",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "じゅうでんテール" },
			damage: 30,
			cost: ["Lightning"],
			effect: {
				'ja-jp': "自分のトラッシュから[L]エネルギーを3枚まで選び、自分のポケモン1匹につける。",
			},
		},
		{
			name: { ja: "キョダイカミナリ" },
			damage: 250,
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 605000,
				tcgplayer: 597438,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ピカチュウV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [25],
};

export default card;
