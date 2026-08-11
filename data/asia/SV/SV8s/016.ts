import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Vulpix",
		'th-th': "โรคอน"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'id-id': "Enam ekornya yang hangat menjadi makin indah dan bulunya makin bagus seiring dengan pertumbuhan tubuhnya.",
		'th-th': "ขนของหางทั้ง 6 ที่แสนอบอุ่นนั้นจะค่อย ๆ เรียงสวยขึ้นและงดงาม ยิ่งขึ้นเมื่อร่างกายของมันเติบใหญ่"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menerjang",
			'th-th': "พุ่งเข้าใส่"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10.",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย"
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card