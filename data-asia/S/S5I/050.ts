import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "青銅鐘",
		th: "โดทาคุน"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		'zh-tw': "牠身上的紋路讓許多學者認為牠原本並不存在於伽勒爾。",
		th: "มีนักวิทยาศาสตร์หลายคนคิดว่าดูจากลวดลายตามตัวแล้วโปเกมอนนี้ไม่ได้อยู่ในกาลาร์มาก่อน"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "金屬轉移",
			th: "เมทัลทรานสเฟอร์"
		},

		effect: {
			'zh-tw': "在自己的回合時，可不限次數使用。選擇1個自己的場上寶可夢身上附加的【鋼】能量，改附於自己的其他寶可夢身上。",
			th: "ใช้กี่ครั้งก็ได้ในเทิร์นฝ่ายเรา เลือกพลังงาน [โลหะ] ที่ติดกับโปเกมอนบนกระดานฝ่ายเรา 1 ลูก ไปติดกับโปเกมอนตัวอื่นของฝ่ายเรา"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "意念頭錘",
			th: "ท่าโขกหัวพลังจิต"
		},

		damage: 70,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card