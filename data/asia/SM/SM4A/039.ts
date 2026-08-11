import { Card } from "models/database/card";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャランゴ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'ja-jp': "雄叫びと ともに 獲物に 飛びかかる。 ウロコの パンチは 相手を ズタズタに 引き裂くぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "おたけび" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "ドラゴンクロー" },
			damage: 40,
			cost: ["Lightning", "Fighting"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560285,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ジャラコ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [783],
};

export default card;
