import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヌオー",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'ja-jp': "船底や 川の岩に 頭を ぶつけまくっても 気にせず 気ままに 泳いでいる のんきな ポケモン。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ころがる" },
			damage: 30,
			cost: ["Water"],
		},
		{
			name: { ja: "ずぶぬれヘッド" },
			damage: "80×",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の山札を上から3枚トラッシュし、その中にあるエネルギーの枚数×80ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 751820,
				tcgplayer: 587872,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ウパー",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [195],
};

export default card;
