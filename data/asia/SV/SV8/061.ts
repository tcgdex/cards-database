import { Card } from "models/database/card";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オコリザル",
		'zh-tw': "火爆猴",
		'zh-cn': "火爆猴",
	},

	illustrator: "Felicia Chen",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'ja-jp': "ある研究者の 学説では モンスターボールの 中でも オコリザルは 怒っているらしい。",
		'zh-tw': "某位研究者的學說中提到， 即使在精靈球裡， 火爆猴好像也在發怒。",
		'zh-cn': "某位研究者的學說中提到， 即使在精靈球裡， 火爆猴好像也在發怒。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "あしばらい",
				'zh-tw': "掃腿",
				'zh-cn': "掃腿",
			},
			damage: 30,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
				'zh-cn': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
		{
			name: {
				'ja-jp': "メガトンパンチ",
				'zh-tw': "百萬噸重拳",
				'zh-cn': "百萬噸重拳",
			},
			damage: 70,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793495,
				tcgplayer: 587641,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マンキー",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [57],
};

export default card;
