import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Exeggcute",
		th: "ทามะทามะ"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		id: "Karena saling mengirimkan telepati yang hanya diterima oleh Exeggcute, Pokémon ini selalu terkumpul 6 ekor pada saat apa pun.",
		th: "เพราะมันส่งโทรจิตที่สื่อถึงกันได้เฉพาะในพวกทามะทามะด้วยกันเอง มันจึงสามารถรวมตัวกัน 6 ตัวได้ตลอดเวลา"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menyerap",
			th: "ดูดซับ"
		},

		effect: {
			id: "Pulihkan HP Pokémon ini sejumlah 10.",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [10]"
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