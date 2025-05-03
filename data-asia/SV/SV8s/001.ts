import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Exeggcute",
		th: "ทามะทามะ"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],

	description: {
		id: "Karena saling mengirimkan telepati yang hanya diterima oleh Exeggcute, Pokémon ini selalu terkumpul 6 ekor pada saat apa pun.",
		th: "เพราะมันส่งโทรจิตที่สื่อถึงกันได้เฉพาะในพวกทามะทามะด้วยกันเอง มันจึงสามารถรวมตัวกัน 6 ตัวได้ตลอดเวลา"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Evolusi Karbitan",
			th: "วิวัฒนาการโตไว"
		},

		effect: {
			id: "Serangan ini juga dapat digunakan pada giliran pertama Pemain Pertama. Pilih 1 kartu dari Deck sendiri yang merupakan evolusi dari Pokémon ini, lalu letakkan pada Pokémon ini untuk melakukan evolusi. Kemudian, kocok Deck.",
			th: "ท่าต่อสู้นี้ แม้ในเทิร์นแรกสุดของผู้เล่นฝ่ายเริ่มก่อนก็สามารถใช้ได้ เลือกการ์ด ที่จะวิวัฒนาการจากโปเกมอนนี้ 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนโปเกมอน นี้เพื่อวิวัฒนาการ แล้วสับสำรับการ์ด"
		},

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