import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布莉姆溫",
		th: "บริมออน"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "又被稱為森林魔女。如果有人大吵大鬧，可能會被牠用觸手上的爪子撕碎。",
		th: "มีอีกสมญาว่าแม่มดป่า ถ้าส่งเสียงเอะอะโวยวาย อาจจะถูกฉีกออกด้วยกรงเล็บที่หนวด"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "魔女迴旋曲",
			th: "วิตช์รอนโด"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。將自己的戰鬥寶可夢與備戰寶可夢互換。然後，對手將對手自己的戰鬥寶可夢與備戰寶可夢互換。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายเรากับโปเกมอน 1 ตัวบนเบนช์ฝ่ายเรา หลังจากนั้น ฝ่ายตรงข้ามสลับโปเกมอนบน ตำแหน่งต่อสู้ของฝ่ายตรงข้ามเองกับโปเกมอน 1 ตัวบนเบนช์ฝ่ายตรงข้าม"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "精神強念",
			th: "ไซโคคิเนซิส"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×50點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x50"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card