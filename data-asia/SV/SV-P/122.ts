import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌオー",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "船底や 川の岩に 頭を ぶつけまくっても 気にせず 気ままに 泳いでいる のんきな ポケモン。",
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
				ja: "自分の山札を上から3枚トラッシュし、その中にあるエネルギーの枚数×80ダメージ。",
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
		ja: "ウパー",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [195],
};

export default card;
