import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "千面避役",
		th: "อินเทเลียน"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		'zh-tw': "能從指尖射出速度高達３馬赫的水槍。牠的瞬膜能幫助牠看穿敵人的弱點，準確地擊中要害。",
		th: "ใช้หนังตาชั้นที่สามมองจับจุดสำคัญของคู่ต่อสู้แล้วยิงทะลุไปเลยด้วยปืนฉีดน้ำที่ปล่อยจากปลายนิ้วความเร็วเสียง 3 มัค"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "快速射擊手",
			th: "ควิกชูตเตอร์"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。在對手的1隻寶可夢身上放置2個傷害指示物。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา วางตัวนับแดเมจ 2 ตัวบนโปเกมอนของฝ่ายตรงข้าม 1 ตัว"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "攀瀑",
			th: "ปีนน้ำตก"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card