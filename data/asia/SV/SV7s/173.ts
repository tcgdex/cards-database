import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ทัททู"
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'th-th': "อาศัยอยู่ในทะเลที่มีกระแสน้ำสงบ เมื่อถูกโจมตีจะพ่นหมึกดำใส่แล้วใช้โอกาสนั้นหนี"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "อยู่นิ่ง ๆ"
		},

		effect: {
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [30]"
		},

		cost: ["Water"]
	}, {
		name: {
			'th-th': "ครีบใบมีด"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card