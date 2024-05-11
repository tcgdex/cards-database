import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉帝歐斯",
		th: "ลาทิโอส"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		'zh-tw': "擁有很高的智慧，能理解人類的語言。 是厭惡爭鬥的溫柔寶可夢。",
		th: "มีสติปัญญาสูงและเข้าใจภาษามนุษย์ เป็นโปเกมอนใจดีที่เกลียดการต่อสู้"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "藍色支援",
			th: "บลูแอสซิสต์"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的手牌選擇1張【超】能量卡，附於自己的「拉帝亞斯」身上。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดพลังงาน [พลังจิต] 1 ใบจากบนมือฝ่ายเรา ติดที่ [ลาทิอาส] ฝ่ายเรา"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "潔淨光芒",
			th: "ลัสเตอร์เพิร์จ"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 210,
		cost: ["Water", "Water", "Psychic", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card