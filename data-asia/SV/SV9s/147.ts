import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "เวลโอ",
		id: "Wailord"
	},

	illustrator: "Katsunori Sato",
	category: "Pokemon",
	hp: 240,
	types: ["Water"],

	description: {
		th: "เป็นที่นิยมด้วยขนาดใหญ่ยักษ์ การชมเวลโอนั้นเป็นแผนท่องเที่ยว ยอดนิยมในทุกพื้นที่"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ไฮโดรปั๊มพ์",
			id: "Pompa Air"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[น้ำ]ที่ติดอยู่กับโปเกมอนนี้ x50",
			id: "Kerusakan yang diberikan bertambah sejumlah 50 untuk tiap Energi {Air} yang dikenakan pada Pokémon ini."
		},

		damage: "10+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "I"
}

export default card