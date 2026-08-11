import { Card } from "models/database/card";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグマ団のコドラ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'ja-jp': "コドラの 堅い体で 与える 突進の 衝撃は コンクリートも 破壊するぜ！",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
		},
		{
			name: { ja: "とっしん" },
			damage: 60,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563733,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マグマ団のココドラ",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [305],
};

export default card;
