import { Card } from "models/database/card";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウインディ",
		'zh-tw': "風速狗",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'ja-jp': "一昼夜で １００００キロの 距離を 駆けぬける 姿は 多くの 人を 魅了してきた。",
		'zh-tw': "只需要一晝夜時間就能跑完１００００公里的身影令許多人為之沉醉。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ほのおをまとう",
				'zh-tw': "火焰纏身",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分のトラッシュから[R]エネルギーを1枚選び、このポケモンにつける。",
				'zh-tw': "從自己的棄牌區選擇1張【火】能量卡，附於這隻寶可夢身上。",
			},
		},
		{
			name: {
				'ja-jp': "とうしのタックル",
				'zh-tw': "鬥志衝撞",
			},
			damage: "100+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが「ポケモンV」なら、100ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【V】」，則增加100點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673010,
				tcgplayer: 570776,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570867,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ガーディ",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [59],
};

export default card;
