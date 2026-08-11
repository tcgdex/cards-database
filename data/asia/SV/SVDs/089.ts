import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โมกุริว",
		'id-id': "Drilbur"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'th-th': "ชาวสวนชาวไร่ไม่ชอบเพราะมันจะใช้เล็บขุดลงไปใต้ดิน ทำให้พืชผักที่ปลูกเสียหาย",
		'id-id': "Drilbur bergerak menggali di dalam tanah menggunakan kukunya, sehingga sayur mayur yang ditanam rusak dan membuat Pokémon ini dibenci oleh pihak yang terkait dengan pertanian."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "งัด",
			'id-id': "Dorong Naik"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 10",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 10."
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card