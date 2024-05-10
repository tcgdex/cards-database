import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大舌舔",
		th: "เบโรเบลท์"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "神奇的舌頭能夠伸到身高的好幾倍遠。至今沒人能解開 為什麼它會這麼神奇。",
		th: "ลิ้นที่ดูแปลกนั้นสามารถยืดยาวได้มากกว่าส่วนสูงของร่างกายหลายเท่า ยังไม่มีใครรู้ว่าทำไมถึงเป็นเช่นนั้น"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "泰山壓頂",
			th: "ทิ้งตัวทับ"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "舔舔颶風",
			th: "เฮอริเคนแพล็บแพล็บ"
		},

		effect: {
			'zh-tw': "擲4次硬幣，造成正面出現的次數×70點傷害。",
			th: "ทอยเหรียญ 4 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x70"
		},

		damage: "70×",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card