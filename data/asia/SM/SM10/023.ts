import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニョロボン",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		'ja-jp': "みずポケモンの 中でも かなり 泳ぎは 達者な 部類 なのに 普段は 陸で 過ごしている。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "げんこつ" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "うずまきラッシュ" },
			damage: "90+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチに「ニョロモ」「ニョロゾ」がいるなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557378,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニョロゾ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [62],
};

export default card;
