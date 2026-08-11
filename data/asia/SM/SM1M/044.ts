import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カイリュー",
	},

	illustrator: "Hiroyuki Yamamoto",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		'ja-jp': "普段は 極めて 穏やかだが その 逆鱗に 触れると すべてを 壊し尽くすまで 収まらない。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ドラゴンウェーブ" },
			damage: 130,
			cost: ["Grass", "Lightning"],
			effect: {
				'ja-jp': "このポケモンについている[草]エネルギーと[雷]エネルギーを、1個ずつトラッシュする。",
			},
		},
		{
			name: { ja: "きょだいなしっぽ" },
			damage: 200,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561645,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ハクリュー",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [149],
};

export default card;
