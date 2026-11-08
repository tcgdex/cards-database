import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โพนีตะ",
		'id-id': "Ponyta"
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'th-th': "หากได้รับการยอมรับจากโพนีตะแล้ว แม้จะจับแผงขนที่ลุกไหม้ก็จะไม่ รู้สึกร้อนอย่างน่าประหลาดใจ",
		'id-id': "Jika diakui oleh Ponyta, maka meskipun menyentuh surai membara Pokémon ini, entah kenapa surainya tidak terasa panas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "พุ่งหัวชนสองครั้ง",
			'id-id': "Sundulan Dua Kali"
		},

		effect: {
			'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card