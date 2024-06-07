import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "魔牆人偶",
		th: "บาร์เรียด"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "有很多學者認為牠大大的手掌是因為要 表演默劇而發達起來的。",
		th: "นักวิชาการส่วนมากคิดกันว่าฝ่ามือใหญ่นั้นพัฒนาขึ้นมาเพื่อเล่นละครใบ้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "相仿秀",
			th: "โชว์เลียนแบบ"
		},

		effect: {
			'zh-tw': "查看對手的手牌。若希望，選擇1張其中的支援者卡，將那個效果作為這個招式的效果使用。",
			th: "ดูการ์ดบนมือฝ่ายตรงข้าม หากต้องการ เลือกการ์ดซัพพอร์ตที่อยู่ในนั้น 1 ใบ ใช้เอฟเฟกต์นั้น เป็นเอฟเฟกต์ของท่าต่อสู้นี้ได้"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "不祥波動",
			th: "คลื่นแปลกประหลาด"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]"
		},

		damage: 20,
		cost: ["Psychic"]
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
	regulationMark: "H"
}

export default card