import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "向尾喵",
		th: "เอเนโค"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "看見在動的東西會不由自主地追上去。會追著自己的尾巴， 一圈圈地原地打轉。",
		th: "ชอบเผลอไล่ตามสิ่งที่เคลื่อนไหว และวิ่งวนไปมาอยู่ที่เดิมเพื่อไล่จับหางตัวเอง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼朋引伴",
			th: "เรียกเพื่อน"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card