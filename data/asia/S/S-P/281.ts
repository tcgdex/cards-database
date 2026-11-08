import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ズガイドス",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'ja-jp': "硬い 頭蓋骨が 特徴。 頭突きで 樹木を へし折って 実った きのみを 食っていた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 20,
			cost: ["Fighting"],
		},
		{
			name: { ja: "ストーンエッジ" },
			damage: "40+",
			cost: ["Fighting", "Fighting"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650953,
				tcgplayer: 597454,
			},
		},
	],

	retreat: 2,
	rarity: "Promo",
	dexId: [408],
};

export default card;
