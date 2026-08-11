import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ナゾノクサ",
		'zh-tw': "走路草",
		'th-th': "นาโซโนะคุสะ"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	dexId: [43],
	hp: 50,
	types: ["Grass"],

	description: {
		'ja-jp': "昼間は 太陽を 避けるため 冷たい 地面に もぐっている。 月の光を 浴びて 育つ。",
		'zh-tw': "白天為了躲避太陽，會鑽進涼爽的地下。藉由沐浴月光來成長。",
		'th-th': "ช่วงกลางวันจะมุดอยู่ใต้ดินเย็น ๆ เพื่อหลบดวงอาทิตย์ เติบโตด้วยการอาบแสงจันทร์"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "じょうきげん",
			'zh-tw': "好心情",
			'th-th': "อารมณ์ดี"
		},

		effect: {
			'ja-jp': "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張卡。",
			'th-th': "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}, {
		cost: ["Grass"],

		name: {
			'ja-jp': "ふむ",
			'zh-tw': "踩",
			'th-th': "เหยียบ"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 723913,
				tcgplayer: 566955,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card