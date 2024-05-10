import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "佛烈托斯",
		th: "ฟอเรทอส"
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "全身覆蓋著有如鋼鐵般堅硬的殼。 殼裡的真面目至今不明。",
		th: "เปลือกที่แข็งราวเหล็กปกคลุมรอบตัว ตัวตนภายใต้เปลือกเป็นอย่างไรไม่มีใครรู้"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "尖刺加農炮",
			th: "ปืนใหญ่หนาม"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×30點傷害。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30"
		},

		damage: "30×",
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "鋼鐵衝撞",
			th: "กระแทกพลังเหล็ก"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到40點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 40 ด้วย"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card