import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Exeggcute",
		'th-th': "ทามะทามะ"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'id-id': "Karena saling mengirimkan telepati yang hanya diterima oleh Exeggcute, Pokémon ini selalu terkumpul 6 ekor pada saat apa pun.",
		'th-th': "เพราะมันส่งโทรจิตที่สื่อถึงกันได้เฉพาะในพวกทามะทามะด้วยกันเอง มันจึงสามารถรวมตัวกัน 6 ตัวได้ตลอดเวลา"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menyerap",
			'th-th': "ดูดซับ"
		},

		effect: {
			'id-id': "Pulihkan HP Pokémon ini sejumlah 10.",
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [10]"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card