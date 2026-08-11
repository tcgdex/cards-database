import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "มอนสเตอร์บอล",
		id: "Bola Pokémon"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
		id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card