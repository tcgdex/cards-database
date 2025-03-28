import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Paldean Tauros",
		th: "พัลเดีย เคนเทารอส"
	},

	illustrator: "toi8",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		id: "Pokémon ini berenang dengan menyemprotkan air dari tanduknya. Memiliki lemak yang banyak dan mudah mengapung adalah karakteristik dari Tauros Varian Air.",
		th: "ว่ายน้ำโดยการพ่นน้ำออกมาจากเขา จุดเด่นของพันธุ์วารีคือมีส่วนที่ เป็นไขมันเยอะจึงลอยน้ำได้ง่าย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tanduk Banting Naik",
			th: "เขางัดเสย"
		},

		effect: {
			id: "Pemain dapat memilih 2 Energi yang dikenakan pada Pokémon Stage 2 di Arena Bertarung lawan, lalu mengembalikannya ke Kartu Pegangan lawan.",
			th: "หากต้องการ เลือกพลังงานที่ติดอยู่กับโปเกมอน[ร่าง2] บนตำแหน่งต่อสู้ฝ่าย ตรงข้าม 2 ลูก นำกลับขึ้นมือฝ่ายตรงข้าม"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Jet Head",
			th: "เจ็ตเฮด"
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card