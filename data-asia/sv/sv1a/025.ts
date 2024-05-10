import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブイゼル",
		'zh-tw': "泳圈鼬",
		th: "บุยเซล",
		id: "Buizel"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [418],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "尻尾を スクリューのように まわし 水中を 泳ぐだけでなく まとわりつく 海草も 切れる。",
		'zh-tw': "像螺旋槳一樣旋轉的尾巴除了能夠讓牠在水裡游泳， 還能切斷纏住自己的海草。",
		th: "หมุนหางต่างใบพัด ไม่ได้ใช้แค่ว่ายในน้ำได้อย่างเดียว แต่ยังใช้ตัดพวกสาหร่ายที่มาพันตัวได้ด้วย",
		id: "Tidak hanya untuk berenang, Buizel memutar ekornya seperti baling-baling untuk memotong rumput laut yang menempel padanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "でんこうせっか",
			'zh-tw': "電光一閃",
			th: "เคลื่อนที่ความไวแสง",
			id: "Serangan Cepat"
		},

		damage: "10+",

		effect: {
			ja: "コインを1回投げオモテなら、10ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加10點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 10",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 10."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card