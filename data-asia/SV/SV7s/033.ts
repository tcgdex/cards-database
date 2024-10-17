import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "มานิวลา",
		id: "Weavile"
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		th: "เคลื่อนไหวเป็นกลุ่มกลุ่มละ 4-5 ตัว จะทำสัญลักษณ์ไว้ที่หินหรือต้นไม้และร่วมมือกันจัดการเหยื่อ",
		id: "Weavile beraktivitas secara berkelompok dengan jumlah 4–5 ekor. Pokémon ini meninggalkan tanda pada batu atau pohon dan bekerja sama dalam menghabisi mangsanya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ฟันแหลก",
			id: "Menyayat"
		},

		damage: 40,
		cost: ["Water"]
	}, {
		name: {
			th: "กรงเล็บลูกเห็บ",
			id: "Hail Claw"
		},

		effect: {
			th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			id: "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash, lalu ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 70,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card