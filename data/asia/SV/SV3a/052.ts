import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "モトトカゲ",
		'zh-tw': "摩托蜥",
		'th-th': "โมโตโทคาเงะ"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [967],
	hp: 120,
	types: ["Colorless"],

	description: {
		'ja-jp': "大昔から 人を 背中に 乗せていたらしい。 １万年前の 壁画に 様子が 描かれている。",
		'zh-tw': "似乎自古就會讓人類坐在背上。１萬年前的 壁畫上描繪著該模樣。",
		'th-th': "ดูเหมือนว่าจะให้ผู้คนขี่บนหลังมาตั้งแต่สมัยโบราณ มีการวาดภาพของมันบนจิตรกรรมฝาผนังเมื่อ 10000 ปีที่แล้ว"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ぶつかる",
			'zh-tw': "衝撞",
			'th-th': "กระแทก"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "バディドライブ",
			'zh-tw': "拍檔猛衝",
			'th-th': "บัดดี้ไดรฟ์"
		},

		damage: "70+",

		effect: {
			'ja-jp': "この番、手札からサポートを出して使っていたなら、70ダメージ追加。",
			'zh-tw': "在這個回合，若從手牌使出了支援者卡，則增加70點傷害。",
			'th-th': "เทิร์นนี้ ถ้านำการ์ดซัพพอร์ตจากบนมือออกมาใช้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 70"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 734291,
				tcgplayer: 566910,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card