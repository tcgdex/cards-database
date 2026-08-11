import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "比克提尼V",
		th: "วิคทินีV"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "V子彈",
			th: "V บูลเล็ท"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【V】」，則增加50點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็น [โปเกมอน【V】] การโจมตีนี้จะเพิ่มแดเมจอีก 50"
		},

		damage: "10+",
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "閃焰射擊",
			th: "แฟลร์ชูต"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。",
			th: "ทิ้งพลังงานที่ติดกับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 120,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card