import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "名探偵ピカチュウ",
		'zh-tw': "機器鶘",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'ja-jp': "ウンチクを 語るのが 好き。 表情 豊かで おっさん みたいな ピカチュウ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とぼとぼかえる" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "しっぽではたく" },
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525180,
				tcgplayer: 597300,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [25],
};

export default card;
