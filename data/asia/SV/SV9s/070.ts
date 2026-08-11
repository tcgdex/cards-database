import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "อิวังโค",
		id: "Rockruff"
	},

	illustrator: "Yoshimi Miyoshi",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		th: "ตอนยังเล็กค่อนข้างเชื่อง พอโตแล้วดุร้ายขึ้น แต่ไม่ลืมบุญคุณเจ้าของ",
		id: "Rockruff sangat jinak saat masih kecil. Meskipun tumbuh menjadi kasar, Pokémon ini tidak pernah melupakan kebaikan pemiliknya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ขุดพลิกหน้าดิน",
			id: "Menggali Kembali"
		},

		effect: {
			th: "ดูการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา คืนที่เดิม หากต้องการ ทิ้ง การ์ดนั้นที่ตำแหน่งทิ้งการ์ด",
			id: "Lihat 1 kartu dari atas Deck sendiri, lalu kembalikan ke posisi semula. Pemain dapat membuang kartu tersebut ke Trash."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "เหยียบ",
			id: "Menginjak"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card