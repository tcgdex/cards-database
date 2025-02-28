import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Fuecoco",
		th: "โฮเกเตอร์"
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		id: "Karena kantong api Fuecoco kecil, energi yang meluap dikeluarkan dari cekungan di kepalanya dan bergoyang-goyang.",
		th: "ถุงไฟมีขนาดเล็ก ทำให้พลังงานนั้นเอ่อล้นออกมาจากร่องบนหัวและ สั่นไหวไปมา"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Panas Penghangus",
			th: "เผาด้วยความร้อน"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar.",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]"
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card