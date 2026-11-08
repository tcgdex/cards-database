import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ナゾノクサ",
		'zh-tw': "走路草",
		'th-th': "นาโซโนะคุสะ",
		'id-id': "Oddish"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	dexId: [43],
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "昼間は 太陽を 避けるため 冷たい 地面に もぐっている。 月の光を 浴びて 育つ。",
		'zh-tw': "白天為了躲避太陽，會鑽進涼爽的地下。 藉由沐浴月光來成長。",
		'th-th': "ช่วงกลางวันจะมุดอยู่ใต้ดินเย็น ๆ เพื่อหลบดวงอาทิตย์ เติบโตด้วยการอาบแสงจันทร์",
		'id-id': "Pada siang hari, Oddish membenamkan diri ke dalam tanah yang dingin untuk menghindari matahari. Pokémon ini tumbuh dengan bermandikan cahaya bulan."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "はっぱカッター",
			'zh-tw': "飛葉快刀",
			'th-th': "คัตเตอร์ใบไม้",
			'id-id': "Daun Pemotong"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746203,
				tcgplayer: 567347,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577294,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card