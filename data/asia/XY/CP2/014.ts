import { Card } from "models/database/card";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤンチャム",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'ja-jp': "一生懸命 怖い 顔で 相手を にらみつけるが 頭を なでられると つい にやけてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "えらぶる" },
			damage: 10,
			cost: ["Fighting", "Colorless"],
			effect: {
				'ja-jp': "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563495,
				tcgplayer: 605347,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [674],
};

export default card;
