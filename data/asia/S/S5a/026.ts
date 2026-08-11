import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "滾滾蝙蝠",
		th: "โคโรโมริ"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "一邊發出超音波，一邊飛來飛去尋找蟲寶可夢來填飽自己的肚子。",
		th: "กระพือปีกบินไปพร้อมกับปล่อยคลื่นความถี่สูงเพื่อหาโปเกมอนแมลงที่เป็นเหยื่อของมัน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼喚",
			th: "รวบรวม"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出1張卡。",
			th: "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "咬",
			th: "แทะ"
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card