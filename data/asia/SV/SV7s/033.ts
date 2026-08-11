import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "มานิวลา",
		'id-id': "Weavile"
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'th-th': "เคลื่อนไหวเป็นกลุ่มกลุ่มละ 4-5 ตัว จะทำสัญลักษณ์ไว้ที่หินหรือต้นไม้และร่วมมือกันจัดการเหยื่อ",
		'id-id': "Weavile beraktivitas secara berkelompok dengan jumlah 4–5 ekor. Pokémon ini meninggalkan tanda pada batu atau pohon dan bekerja sama dalam menghabisi mangsanya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ฟันแหลก",
			'id-id': "Menyayat"
		},

		damage: 40,
		cost: ["Water"]
	}, {
		name: {
			'th-th': "กรงเล็บลูกเห็บ",
			'id-id': "Hail Claw"
		},

		effect: {
			'th-th': "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'id-id': "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash, lalu ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
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