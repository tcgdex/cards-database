import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Bouffalant",
		th: "บัฟฟรอน"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		id: "Bouffalant dapat menghancurkan mobil cukup dengan serudukan kepalanya. Makin besar rambut di kepalanya, makin tinggi pula posisinya di antara kelompoknya.",
		th: "เพียงแค่พุ่งหัวชนก็สามารถบดทำลายรถยนต์ได้ ยิ่งมีขนที่หัวมากก็ยิ่ง ได้รับการยอมรับจากพวกพ้องในฝูง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tanduk Menanti",
			th: "เขารอรับ"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, saat Pokémon ini menerima kerusakan akibat serangan, letakkan 6 Token Kerusakan pada Pokémon yang telah menggunakan serangan.",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ วาง ตัวนับแดเมจ 6 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Smash Head",
			th: "สแมชเฮด"
		},

		effect: {
			id: "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash.",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
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