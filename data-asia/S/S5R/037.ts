import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天罩蟲",
		th: "เลโดมุชิ"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "正在殼裡成長著。用精神力量掌握外界的狀況，做好進化的準備。",
		th: "กำลังเติบโตอยู่ในกระดอง รับรู้สภาพการณ์ภายนอกด้วยพลังจิต กำลังเตรียมตัวเพื่อวิวัฒนาการ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "雷達",
			th: "เรดาร์"
		},

		effect: {
			'zh-tw': "查看自己的牌庫上方4張卡，以任意順序排列，放回牌庫上方。",
			th: "ดูการ์ดในสำรับฝ่ายเราจากด้านบน 4 ใบ เรียงตามลำดับที่ชอบ แล้วใส่กลับสำรับการ์ดจากด้านบน"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "衝撞",
			th: "กระแทก"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card