import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Kyurem Hitam ex",
		'th-th': "แบล็กคิวเรมex"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Ice Age",
			'th-th': "ไอซ์เอจ"
		},

		effect: {
			'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon {Naga}, ubah kondisi Pokémon tersebut menjadi Lumpuh.",
			'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอน[มังกร] จะทำให้โปเกมอนนั้น เป็นสภาวะ[ชา]"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Black Frost",
			'th-th': "แบล็กฟรอสต์"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30.",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย"
		},

		damage: 250,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card