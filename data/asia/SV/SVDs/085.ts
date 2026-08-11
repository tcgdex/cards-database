import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "พัลเดีย เคนเทารอส",
		'id-id': "Paldean Tauros"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'th-th': "จุดเด่นคือกล้ามเนื้อหนาอันทรงพลังและอารมณ์ที่รุนแรง เรียกกันว่าพันธุ์ประจัญบาน",
		'id-id': "Otot tebal bertenaga dan sifatnya yang kasar adalah karakteristiknya. Pokémon ini dikenal sebagai Tauros Varian Tempur."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เขาพิโรธ",
			'id-id': "Tanduk Kemarahan"
		},

		effect: {
			'th-th': "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'th-th': "คอมแบตแท็กเกิล",
			'id-id': "Combat Tackle"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card