import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Shellos",
		'th-th': "คารานะคูชิ"
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'id-id': "Shellos sering terlihat di tepi pantai. Jika hanya untuk beberapa jam, Pokémon ini juga dapat beraktivitas di darat.",
		'th-th': "มักพบเห็นบริเวณโขดหินริมหาด สามารถใช้ชีวิตบนบกได้ถ้าเป็นในช่วง ระยะเวลาไม่นานนัก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Percikan Air",
			'th-th': "ราดน้ำ"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card