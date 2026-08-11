import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スターミー",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'ja-jp': "輝く コアは 海の 宝石と 呼ばれる。 高価な アクセサリーに 変えられ 隠れて 取引される。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ストレンジウェーブ" },
			damage: 40,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札にある[水]または[超]エネルギーを3枚まで、自分のベンチポケモン1匹につける。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558356,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒトデマン",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [121],
};

export default card;
