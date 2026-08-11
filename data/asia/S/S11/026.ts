import { Card } from "models/database/card";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホエルオー",
		'zh-tw': "吼鯨王",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],

	description: {
		'ja-jp': "大きな 体を 波の上で ジャンプさせ 衝撃を 生みだし 相手を 気絶 させることがある。",
		'zh-tw': "有時會讓大大的身體在波浪上跳躍，藉此 製造出衝擊讓對手昏迷。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ジャンボサイズ",
				'zh-tw': "超大尺寸",
			},
			effect: {
				'ja-jp': "このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "スペシャルウェーブ",
				'zh-tw': "特殊波",
			},
			damage: "120+",
			cost: ["Water", "Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "このポケモンに特殊エネルギーがついているなら、120ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上附有特殊能量，則增加120點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667901,
				tcgplayer: 569957,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ホエルコ",
	},

	retreat: 4,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [321],
};

export default card;
