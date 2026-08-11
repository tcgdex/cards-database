import { Card } from "models/database/card";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フォッコ",
	},

	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 50,
	types: ["Fire"],

	description: {
		'ja-jp': "小枝を 持ち歩き おやつがわりに ポリポリ 食べる。 耳から 熱気を 噴き出して 相手を 威嚇する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひをふく" },
			damage: "10+",
			cost: ["Fire", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、30ダメージを追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563484,
				tcgplayer: 605335,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [653],
};

export default card;
