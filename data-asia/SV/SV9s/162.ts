import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "เฮรัชเชอร์ex",
		id: "Dondozo ex"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 260,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			th: "คลื่นลูกใหญ่เอาคืน",
			id: "Serangan Balik Ombak Besar"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "30+",
		cost: ["Water", "Colorless"]
	}, {
		name: {
			th: "ไดนามิกไดฟ์",
			id: "Dynamic Dive"
		},

		effect: {
			th: "หากต้องการ การโจมตีนี้จะเพิ่มแดเมจอีก 120 เมื่อทำเช่นนั้นแล้ว โปเกมอนนี้ ก็จะได้รับแดเมจ 50 ด้วย",
			id: "Pemain dapat membuat kerusakan yang diberikan bertambah sejumlah 120. Jika dilakukan, Pokémon ini juga menerima kerusakan sejumlah 50."
		},

		damage: "120+",
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "I"
}

export default card