import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カイリュー",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		'ja-jp': "荒れ狂う 海も ものともせずに 飛んでいく。 その姿を 見かけた 船長は 海の化身と 呼んだ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ハリケーンチャージ" },
			effect: {
				'ja-jp': "自分の番に1回使える。自分の手札から[水]エネルギーと[雷]エネルギーをそれぞれ1枚まで選び、自分のポケモンに好きなようにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ドラゴンインパクト" },
			damage: 170,
			cost: ["Water", "Lightning", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、3個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557030,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ハクリュー",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [149],
};

export default card;
