import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "カイリュー",
	},

	illustrator: "Hiroyuki Yamamoto",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		ja: "普段は 極めて 穏やかだが その 逆鱗に 触れると すべてを 壊し尽くすまで 収まらない。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ドラゴンウェーブ" },
			damage: 130,
			cost: ["Grass", "Lightning"],
			effect: {
				ja: "このポケモンについている[草]エネルギーと[雷]エネルギーを、1個ずつトラッシュする。",
			},
		},
		{
			name: { ja: "きょだいなしっぽ" },
			damage: 200,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
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
		ja: "ハクリュー",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [149],
};

export default card;
