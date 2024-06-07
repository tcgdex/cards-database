import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "破破舵輪",
		th: "ดาดาริน"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "在海底飄蕩的海藻吸收了沉船的零件後 轉生而成的幽靈寶可夢。",
		th: "เศษสาหร่ายที่ลอยอยู่ก้นทะเลนำพาชิ้นส่วนของซากเรือจมเข้ามารวมกันแล้วเกิดใหม่เป็นโปเกมอนผี"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "迴轉攻擊",
			th: "โจมตีหมุนวน"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "鋼鐵船錨",
			th: "สตีลแองเคอร์"
		},

		effect: {
			'zh-tw': "若自己的備戰區有【鋼】寶可夢，則增加80點傷害。",
			th: "ถ้าบนเบนช์ฝ่ายเรามีโปเกมอน[โลหะ]อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 80"
		},

		damage: "80+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card