import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เดเด็นเนะ",
		'id-id': "Dedenne"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'th-th': "อวัยวะผลิตกระแสไฟฟ้ามีขนาดเล็กและยังไม่พัฒนาเต็มที่เลยชอบเอาหางไปดูดไฟฟ้าจากบ้านคนเพื่อชาร์จไฟฟ้า",
		'id-id': "Dedenne mengecas dan menyerap listrik dari rumah manusia menggunakan ekornya karena tubuhnya kecil dan organ pembangkit listriknya masih belum sempurna."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "งานเล็กน้อย",
			'id-id': "Tugas Kecil"
		},

		effect: {
			'th-th': "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			'id-id': "Pilih paling banyak 2 lembar Energi Dasar dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Psychic"]
	}, {
		name: {
			'th-th': "สปินเทิร์น",
			'id-id': "Spin Turn"
		},

		effect: {
			'th-th': "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			'id-id': "Tukar Pokémon ini dengan Pokémon Cadangan."
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card