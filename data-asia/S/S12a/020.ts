import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆香猿V",
		th: "บาอกกีV"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "力量濺射",
			th: "พลังระเบิด"
		},

		effect: {
			'zh-tw': "若希望，從自己的手牌選擇最多2張基本能量卡，以任意方式附於自己的寶可夢身上。",
			th: "หากต้องการ เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนฝ่ายเราตามชอบ"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "閃焰漏接",
			th: "จักกลิ้งบอลไฟ"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30"
		},

		damage: "90+",
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card