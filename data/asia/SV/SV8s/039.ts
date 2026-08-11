import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Feebas",
		'th-th': "ฮินบาส"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		'id-id': "Pokémon yang paling lusuh. Feebas berkumpul dalam jumlah besar dan tinggal di dasar sungai yang banyak tanaman airnya.",
		'th-th': "โปเกมอนที่ดูโทรมที่สุด อาศัยอยู่กันเป็นฝูงที่ก้นแม่น้ำที่มีพืชน้ำมากมาย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Lompat Kabur",
			'th-th': "ดีดหนี"
		},

		effect: {
			'id-id': "Tukar Pokémon ini dengan Pokémon Cadangan.",
			'th-th': "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card