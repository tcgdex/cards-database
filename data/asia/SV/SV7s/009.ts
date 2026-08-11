import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โมคุโร",
		'id-id': "Rowlet"
	},

	illustrator: "Yoshimi Miyoshi",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'th-th': "ระหว่างที่บินจะซัดขนนกแสนคมกริบใส่อีกฝ่าย แต่หากอยู่ในระยะประชิด จะสยบอีกฝ่ายด้วยลูกเตะที่รุนแรง",
		'id-id': "Rowlet terbang sambil menembakkan bulunya yang tajam. Kemudian pada jarak dekat, ia melancarkan tendangan dahsyat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "คาบ",
			'id-id': "Menggondol"
		},

		effect: {
			'th-th': "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			'id-id': "Ambil 1 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ใบไม้",
			'id-id': "Dedaunan"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card