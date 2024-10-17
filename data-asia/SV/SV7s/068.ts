import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "บัลซ์เซลex",
		id: "Dachsbun ex"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			th: "เวลาท้องอิ่ม",
			id: "Waktu Kenyang"
		},

		effect: {
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง ฟื้นฟู HP ทั้งหมดของโปเกมอนวิวัฒนาการฝ่ายเราทุกตัว หลังจากนั้น ทิ้งพลังงานที่ติดอยู่กับโปเกมอนที่ฟื้นฟู ทั้งหมดที่ตำแหน่งทิ้งการ์ด",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pulihkan HP semua Pokémon Evolusi sendiri sepenuhnya. Setelah itu, buang semua Energi yang dikenakan pada Pokémon yang telah dipulihkan ke Trash."
		}
	}],

	attacks: [{
		name: {
			th: "วันเดอร์ไชน์",
			id: "Wonder Shine"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 130,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card