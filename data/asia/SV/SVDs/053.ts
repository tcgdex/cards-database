import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "บาจินอุนิ",
		id: "Pincurchin"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		th: "สร้างพลังงานไฟฟ้าออกมาเมื่อย่อยอาหาร ใช้ฟันที่แข็งแรง 5 ซี่ขูดสาหร่ายออกมากิน",
		id: "Pincurchin menghasilkan listrik saat mencerna makanannya. Pokémon ini menggunakan 5 giginya yang keras untuk mengikis dan memakan rumput laut."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "นีดเดิ้ลแครช",
			id: "Needle Crush"
		},

		effect: {
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 70,
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card