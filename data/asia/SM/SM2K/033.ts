import { Card } from "models/database/card";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナマズン",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'ja-jp': "動くものなら なんでも 喰いつく 大食らい。 普段は 沼底で じっと 獲物を 待ち構えている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "みずのはどう" },
			damage: 60,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "じすべり" },
			damage: "100×",
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の山札を上から3枚トラッシュし、その中のエネルギーの枚数x100ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561499,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドジョッチ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [340],
};

export default card;
