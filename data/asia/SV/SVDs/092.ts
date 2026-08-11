import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โคไรดอนex",
		'id-id': "Koraidon ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'th-th': "สปลิตบีม",
			'id-id': "Split Beam"
		},

		effect: {
			'th-th': "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 2 ตัว ก็จะได้รับแดเมจตัวละ 20 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'id-id': "Serangan ini juga memberikan kerusakan masing-masing sejumlah 20 kepada 2 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			'th-th': "ไกอาเพรส",
			'id-id': "Gaia Press"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 230,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card