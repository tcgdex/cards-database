import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โซรัว",
		'id-id': "Zorua"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'th-th': "แปลงกายเป็นคนหรือโปเกมอนตัวอื่น ซ่อนตัวตนที่แท้จริงเพื่อปกป้องตัวเองจากอันตราย",
		'id-id': "Zorua menjelma menjadi manusia atau Pokémon lain. Dengan menyembunyikan identitasnya, Pokémon ini melindungi dirinya dari bahaya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เหยียบ",
			'id-id': "Menginjak"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ข่วนทวีคูณ",
			'id-id': "Cakaran Ganda"
		},

		effect: {
			'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x20",
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "20×",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card