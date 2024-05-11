import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黏黏寶",
		th: "นูเมรา"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		'zh-tw': "藏身在濕度較高的樹蔭下。 覆蓋著身體的黏糊液體一旦 乾枯，就會立刻失去生命力。",
		th: "ซ่อนตัวอยู่ในเงาไม้ที่มีความชื้นสูง หากเมือกเหลวลื่น ๆ ที่ห่อหุ้มภายนอกร่างกายแห้งผาก ก็จะสิ้นลมไปในทันที"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "溶解",
			th: "หลอมละลาย"
		},

		damage: 30,
		cost: ["Water", "Metal"]
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card