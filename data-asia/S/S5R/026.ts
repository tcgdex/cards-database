import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "帝王拿波V",
		th: "เอ็มเพลท์V"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "君王之眼",
			th: "เอ็มเพอร์เรอร์อาย"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手場上的【基礎】寶可夢（「擁有規則的寶可夢」除外）的特性全部消除。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ ความสามารถของโปเกมอน [พื้นฐาน] บนกระดานฝ่ายตรงข้าม (ยกเว้น [โปเกมอนที่มีกฎ] ) ทั้งหมดจะหายไป"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "螺旋斬",
			th: "ท่าฟันบิดเกลียว"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
			th: "เลือกพลังงานที่ติดกับโปเกมอนนี้ 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์"
		},

		damage: 130,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card