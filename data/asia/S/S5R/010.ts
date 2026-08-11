import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡璞・哞哞",
		th: "คาปู บูลูลู"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "雖被稱呼為守護神，但有著會將自己視為敵人的對手徹底擊潰的狂暴個性。",
		th: "ถูกเรียกว่าเป็นเทพพิทักษ์ แต่ก็มีความเกรี้ยวกราดที่คอยจัดการผู้ที่มองว่าเป็นศัตรูอย่างเด็ดขาด"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "推倒",
			th: "ชนกระเด็น"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			th: "ให้ฝ่ายตรงข้ามสลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอน 1 ตัวบนเบนช์ฝ่ายตรงข้าม [ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้]"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "大自然的裁決",
			th: "ธรรมชาติลงทัณฑ์"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢身上附加的能量全部丟棄。這個情況下，增加80點傷害。",
			th: "หากต้องการ ทิ้งพลังงานที่ติดกับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด เมื่อทำเช่นนั้น การโจมตีนี้จะเพิ่มแดเมจอีก 80"
		},

		damage: "80+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card