import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "กิเกียร์",
		id: "Klang"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		th: "เวลาเอาจริงเฟืองด้านนอกของเฟืองใหญ่กับเฟืองเล็กจะประกบกัน ความเร็วในการหมุนจะเพิ่มขึ้นอย่างก้าวกระโดด",
		id: "Saat sedang serius, gerigi di sisi luar roda gigi besar dan roda gigi kecil akan saling bertepatan. Kecepatan putar Klang akan meningkat drastis."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ไอออนแท็กเกิล",
			id: "Iron Tackle"
		},

		effect: {
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card