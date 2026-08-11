import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Bouffalant",
		'th-th': "บัฟฟรอน"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'id-id': "Bouffalant dapat menghancurkan mobil cukup dengan serudukan kepalanya. Makin besar rambut di kepalanya, makin tinggi pula posisinya di antara kelompoknya.",
		'th-th': "เพียงแค่พุ่งหัวชนก็สามารถบดทำลายรถยนต์ได้ ยิ่งมีขนที่หัวมากก็ยิ่ง ได้รับการยอมรับจากพวกพ้องในฝูง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Tanduk Menanti",
			'th-th': "เขารอรับ"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, saat Pokémon ini menerima kerusakan akibat serangan, letakkan 6 Token Kerusakan pada Pokémon yang telah menggunakan serangan.",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ วาง ตัวนับแดเมจ 6 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Smash Head",
			'th-th': "สแมชเฮด"
		},

		effect: {
			'id-id': "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash.",
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card