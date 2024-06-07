import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘",
		th: "วาไนเดอร์"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "愛撒嬌的新葉喵，溫溫吞吞的呆火鱷，愛乾淨的潤水鴨。皮卡丘好像也很期待即將和新夥伴們一起展開的冒險！",
		th: "ใช้ใยในการห้อยตัวจากกิ่งไม้หรือเพดานและเคลื่อนไหวอย่างเงียบเชียบ จัดการเหยื่อก่อนที่พวกมันจะรู้ตัว"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "一同冒險",
			th: "ผูกรัดด้วยใย"
		},

		effect: {
			'zh-tw': "增加自己的備戰寶可夢的數量×10點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]"
		},

		damage: 30,
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card