import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ブイゼル",
		'zh-tw': "泳圈鼬",
		'th-th': "บุยเซล",
		'id-id': "Buizel"
	},

	illustrator: "Jerky",
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
		cost: ["Colorless"],

		name: {
			'ja-jp': "でんこうせっか",
			'zh-tw': "電光一閃",
			'th-th': "เคลื่อนที่ความไวแสง",
			'id-id': "Serangan Cepat"
		},

		damage: "10+",

		effect: {
			'ja-jp': "コインを1回投げオモテなら、10ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加10點傷害。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 10",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 10."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701079,
				tcgplayer: 568148,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card