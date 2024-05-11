import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "路卡利歐",
		th: "ลูคาริโอ"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "操作一種被稱為波導的力量來進行狩獵。這種力量就連 巨大的岩石也能擊得粉碎。",
		th: "ควบคุมพลังที่เรียกว่าคลื่นทำลายหินใหญ่เป็นผุยผงไว้ล่าเหยื่อ"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "旺盛鬥志",
			th: "จิตสู้อำมหิต"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。在這隻寶可夢身上放置2個傷害指示物。然後，從自己的牌庫選擇1張【鬥】能量卡，附於這隻寶可夢身上。並且重洗牌庫。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา วางตัวนับแดเมจ 2 ตัวบนโปเกมอนนี้ หลังจากนั้น เลือกการ์ดพลังงาน[ต่อสู้] 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ แล้วสับสำรับการ์ด"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "連續波導彈",
			th: "กระสุนคลื่นพลังต่อเนื่อง"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的【鬥】能量全部丟棄，增加其張數×60點傷害。",
			th: "ทิ้งการ์ดพลังงาน[ต่อสู้]ทั้งหมดที่ติดอยู่กับโปเกมอนนี้ที่ตำแหน่งทิ้งการ์ด แดเมจจะเพิ่มตามจำนวนการ์ดนั้น x60"
		},

		damage: "10+",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card