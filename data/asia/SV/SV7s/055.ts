import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "สลีป",
		'id-id': "Drowzee"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'th-th': "ว่ากันว่าพอมันใช้จมูกที่ยื่นออกมาดมฟุดฟิดก็จะรู้หมดว่าใครที่อยู่ตรงไหนกำลังฝันอะไรอยู่",
		'id-id': "Dikabarkan Drowzee dapat mengetahui segalanya tentang siapa, di mana, dan sedang bermimpi apa dengan mengedutkan hidungnya yang menonjol."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "สายตาชวนขนลุก",
			'id-id': "Pandangan Menyeramkan"
		},

		effect: {
			'th-th': "ดูการ์ดบนมือฝ่ายตรงข้าม",
			'id-id': "Lihat Kartu Pegangan lawan."
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card