import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大岩蛇",
		th: "อิวาร์ค"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "彎曲扭動巨大結實的身體，以時速８０公里的猛烈勢頭挖掘前進。",
		th: "บิดร่างกายที่ใหญ่และแข็งแรงให้โค้งงอเป็นเกลียวขุดเจาะพื้นดินลงไปอย่างรวดเร็วด้วยความเร็ว 80 กิโลเมตรต่อชั่วโมง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "落石",
			th: "หินผาถล่ม"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "巨岩衝撞",
			th: "ร็อคแทคเกิล"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到60點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับ 60 แดเมจด้วย"
		},

		damage: 170,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card