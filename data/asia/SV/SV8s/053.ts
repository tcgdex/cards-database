import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Iron Bundle",
		th: "ถุงเหล็ก"
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		id: "Pokémon yang mirip dengan objek misterius yang terdaftar dalam sebuah buku kuno. Hanya terdapat 2 laporan kesaksian atas Pokémon ini.",
		th: "โปเกมอนที่มีความคล้ายคลึงกับวัตถุลึกลับที่ปรากฏในบันทึกเก่าแก่ ใน อดีตมีข้อมูลว่ามีผู้พบเห็นเพียง 2 ครั้งเท่านั้น"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Gust Collision",
			th: "ลมกระโชกประสานงา"
		},

		effect: {
			id: "Kerusakan akibat serangan ini berkurang sejumlah 50 untuk tiap Energi yang dibutuhkan oleh Pokémon Bertarung lawan untuk Mundur.",
			th: "แดเมจของท่าต่อสู้นี้จะลดลง ตามจำนวนพลังงานสำหรับ[หนี]ของโปเกมอนบน ตำแหน่งต่อสู้ฝ่ายตรงข้าม x50"
		},

		damage: "200-",
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card