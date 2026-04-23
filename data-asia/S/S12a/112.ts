import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黏黏寶",
		th: "นูเมรา",
		ja: "ヌメラ"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		'zh-tw': "藏身在濕度較高的樹蔭下。 覆蓋著身體的黏糊液體一旦 乾枯，就會立刻失去生命力。",
		th: "ซ่อนตัวอยู่ในเงาไม้ที่มีความชื้นสูง หากเมือกเหลวลื่น ๆ ที่ห่อหุ้มภายนอกร่างกายแห้งผาก ก็จะสิ้นลมไปในทันที",
		ja: "湿度 高き 木陰に 身を 潜める。 体表を覆う ぬめりとした 液体が 乾くと たちどころに 生気を 失う。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน",
			ja: "たいあたり"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "溶解",
			th: "หลอมละลาย",
			ja: "とかす"
		},

		damage: 30,
		cost: ["Water", "Metal"]
	}],

	retreat: 2,
	regulationMark: "F",
	dexId: [704],

	thirdParty: {
		cardmarket: 687674
	}
}

export default card