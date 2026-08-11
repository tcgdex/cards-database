import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "マグマ団のコドラ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "コドラの 堅い体で 与える 突進の 衝撃は コンクリートも 破壊するぜ！",
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
				ja: "このポケモンにも10ダメージ。",
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
		ja: "マグマ団のココドラ",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [305],
};

export default card;
