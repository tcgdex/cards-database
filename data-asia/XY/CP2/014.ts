import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤンチャム",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "一生懸命 怖い 顔で 相手を にらみつけるが 頭を なでられると つい にやけてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "えらぶる" },
			damage: 10,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
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
