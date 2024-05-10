import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "โนก็อจจิ",
		id: "Dunsparce"
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		th: "สร้างทางวงกตในที่มืด พอมีคนเจอก็จะใช้หางขุดมุดดินหนี",
		id: "Dunsparce membuat labirin di tempat gelap. Jika ada yang melihatnya, Pokémon ini akan melarikan diri dengan menggali lubang menggunakan ekornya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "หาพรรคพวก",
			id: "Mencari Teman"
		},

		effect: {
			th: "เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Pilih 1 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "กัดติด",
			id: "Menggigit"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card