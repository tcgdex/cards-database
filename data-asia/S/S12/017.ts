import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熾焰咆哮虎",
		th: "กาโอกาเอ็น"
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		'zh-tw': "當牠燃起鬥志的時候，腰部周圍的火焰也會 燃燒得特別猛烈。",
		th: "เมื่อมีใจสู้ เปลวไฟที่อยู่รอบเอวจะลุกโชติช่วงอย่างเห็นได้ชัด"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "秘技",
			th: "ท่าลับเฉพาะ"
		},

		effect: {
			'zh-tw': "選擇這隻寶可夢進化前持有的1個招式，作為這個招式使用。",
			th: "เลือกท่าต่อสู้ที่โปเกมอนนี้มีก่อนวิวัฒนาการ 1 ท่า ใช้เป็นท่าต่อสู้นี้ได้"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "閃焰射擊",
			th: "แฟลร์ชูท"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。",
			th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 180,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card