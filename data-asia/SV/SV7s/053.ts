import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ยาดง",
		id: "Slowpoke"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		th: "ดูเหม่อลอยตลอดเวลา ไม่รู้ว่าคิดอะไรอยู่ ถนัดใช้หางตกเหยื่อ",
		id: "Slowpoke selalu bengong dan tidak ada yang tahu apa yang sedang dipikirkannya. Pokémon ini pandai memancing makanan menggunakan ekornya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ทำหางตก",
			id: "Merundukkan Ekor"
		},

		effect: {
			th: "เลือกการ์ดโปเกมอน 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
			id: "Pilih 1 lembar Pokémon dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "พุ่งเข้าชน",
			id: "Serudukan"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card