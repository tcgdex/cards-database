import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アローララッタ",
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'ja-jp': "餌の 味と 鮮度に こだわる グルメな ポケモン。 ラッタが 棲む レストランは アタリと いわれる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "わるいさしず" },
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の山札にある好きなカードを、自分のベンチポケモンの数ぶんまで、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "がむしゃら" },
			damage: "60+",
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数x30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561637,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アローラコラッタ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [20],
};

export default card;
