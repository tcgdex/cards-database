import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ยันชัม",
		'id-id': "Pancham"
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'th-th': "การเลียนแบบโกรอนดะที่เป็นลูกพี่จะทำให้เรียนรู้วิธีการต่อสู้หรือวิธีการจับเหยื่อได้",
		'id-id': "Dengan menirukan Pangoro yang ia hormati sebagai bos, Pancham mempelajari cara bertarung dan cara menangkap mangsa."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เหลือบมอง",
			'id-id': "Memelototi"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "เตะเรียด",
			'id-id': "Tendangan Rendah"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card