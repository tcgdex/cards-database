import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "โมรุเปโกะของแมรี",
		id: "Morpeko <Marnie>"
	},

	illustrator: "Susumu Maeya",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		th: "จะกินเมล็ดพืชอยู่เสมอเพื่อคลายหิว หากท้องว่างจนเกินไป จิตใจจะ ปั่นป่วนจนก้าวร้าวขึ้น"
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "สไปก์วีล",
			id: "Spike Wheel"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[ความมืด]ที่ติดอยู่กับโปเกมอนนี้ x40",
			id: "Kerusakan yang diberikan bertambah sejumlah 40 untuk tiap Energi {Kegelapan} yang dikenakan pada Pokémon ini."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "I"
}

export default card