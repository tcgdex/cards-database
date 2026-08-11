import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Feebas",
		th: "ฮินบาส"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		id: "Pokémon yang paling lusuh. Feebas berkumpul dalam jumlah besar dan tinggal di dasar sungai yang banyak tanaman airnya.",
		th: "โปเกมอนที่ดูโทรมที่สุด อาศัยอยู่กันเป็นฝูงที่ก้นแม่น้ำที่มีพืชน้ำมากมาย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Lompat Kabur",
			th: "ดีดหนี"
		},

		effect: {
			id: "Tukar Pokémon ini dengan Pokémon Cadangan.",
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์"
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