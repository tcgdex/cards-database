import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "密勒頓",
		th: "มิไรดอน"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 110,
	types: ["Dragon"],

	description: {
		'zh-tw': "牠似乎就是古書裡所提及的鐵大蛇。傳說牠曾用雷電 將大地化成了一片灰。",
		th: "ดูเหมือนว่าจะเป็นนาคเหล็กซึ่งมีชื่อในบันทึกเก่าแก่ ว่ากันว่ามันใช้สายฟ้าทำให้ผืนดินกลายเป็นเถ้าถ่าน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "暴衝高點",
			th: "แอกเซลพีก"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，以任意方式附於自己的「未來」寶可夢身上。並且重洗牌庫。",
			th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอน [อนาคต] ฝ่ายเราตามชอบ แล้วสับสำรับการ์ด"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "閃雷攻擊",
			th: "สปาร์กกิงแอทแทก"
		},

		damage: 160,
		cost: ["Lightning", "Lightning", "Psychic"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card