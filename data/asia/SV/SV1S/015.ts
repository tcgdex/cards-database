import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ブイゼル",
		'zh-tw': "泳圈鼬",
		'th-th': "บุยเซล",
		'id-id': "Buizel"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [418],
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "尻尾を スクリューのように まわし 水中を 泳ぐだけでなく まとわりつく 海草も 切れる。",
		'zh-tw': "像螺旋槳一樣旋轉的尾巴除了能夠讓牠在水裡游泳， 還能切斷纏住自己的海草。",
		'th-th': "หมุนหางต่างใบพัด ไม่ได้ใช้แค่ว่ายในน้ำได้อย่างเดียว แต่ยังใช้ตัดพวกสาหร่ายที่มาพันตัวได้ด้วย",
		'id-id': "Tidak hanya untuk berenang, Buizel memutar ekornya seperti baling-baling untuk memotong rumput laut yang menempel padanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "みずかけ",
			'zh-tw': "潑水",
			'th-th': "สาดน้ำ",
			'id-id': "Guyuran Air"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ひれカッター",
			'zh-tw': "鰭快刀",
			'th-th': "ครีบใบมีด",
			'id-id': "Sirip Pemotong"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 692981,
				tcgplayer: 567132,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card