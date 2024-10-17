import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โกรอนดะ",
		id: "Pangoro"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		th: "มีนิสัยก้าวร้าว ทำให้ศิโรราบได้ด้วยพละกำลังแขน จิตวิญญาณในการต่อสู้จะลุกโชนเมื่อต่อสู้ตัวต่อตัวกับทาจิฟุซากุมะ",
		id: "Pangoro sifatnya kasar dan menggunakan kekuatan lengannya untuk membungkam lawan. Pokémon ini membangkitkan semangat bertarungnya untuk bertarung satu lawan satu dengan Obstagoon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ดึง",
			id: "Menghela"
		},

		effect: {
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้",
			id: "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
		},

		cost: ["Darkness"]
	}, {
		name: {
			th: "อาละวาดไปทั่ว",
			id: "Mengamuk"
		},

		effect: {
			th: "ทำให้โปเกมอนนี้เป็นสภาวะ[สับสน]",
			id: "Ubah kondisi Pokémon ini menjadi Pusing."
		},

		damage: 160,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card