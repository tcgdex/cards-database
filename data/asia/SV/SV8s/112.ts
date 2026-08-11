import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Glimmora",
		th: "คิราฟลอร์"
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		id: "Belakangan ini diketahui bahwa kelopak bunga energi racun Glimmora yang mengkristal mirip dengan Permata Terastal.",
		th: "เมื่อไม่นานมานี้พบว่ากลีบดอกไม้ที่ตกผลึกจากพลังงานพิษนั้นมีความ คล้ายกับอัญมณีเทรัสตัล"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Serpihan Merasuk",
			th: "เศษผลึกกัดกิน"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun. Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat dikenakan Energi yang dimasukkan dari Kartu Pegangan.",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ] เทิร์นถัดไปของฝ่าย ตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะติดการ์ดพลังงานที่จะนำออกมาจากบนมือ ไม่ได้"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Lemparan Batu",
			th: "หินผาถล่ม"
		},

		damage: 60,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card