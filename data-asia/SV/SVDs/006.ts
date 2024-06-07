import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "โมโรบาเรรุ",
		id: "Amoonguss"
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		th: "ระวังสปอร์พิษที่มันพ่นออกมาให้ดี ถ้าโดนจะมีเห็ดที่เหมือนหมวกเห็ดของโมโรบาเรรุงอกขึ้นมาที่ส่วนนั้น",
		id: "Hati-hati dengan spora racun yang dikeluarkan Amoonguss. Akan tumbuh jamur yang mirip dengan topi Pokémon ini pada bagian yang terkena."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "สปอร์อันตราย",
			id: "Spora Berbahaya"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]และ[ชา]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Racun dan Lumpuh."
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card