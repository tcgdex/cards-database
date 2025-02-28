import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Vulpix",
		th: "โรคอน"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		id: "Enam ekornya yang hangat menjadi makin indah dan bulunya makin bagus seiring dengan pertumbuhan tubuhnya.",
		th: "ขนของหางทั้ง 6 ที่แสนอบอุ่นนั้นจะค่อย ๆ เรียงสวยขึ้นและงดงาม ยิ่งขึ้นเมื่อร่างกายของมันเติบใหญ่"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menerjang",
			th: "พุ่งเข้าใส่"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 10.",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย"
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