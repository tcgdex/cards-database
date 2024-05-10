import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "โวลเคเนียน",
		id: "Volcanion"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		th: "พ่นไอน้ำในร่างกายออกมาจากแขนกลางหลัง มีพลังทำลายล้างขนาดสามารถเป่าภูเขาลูกนึงให้ปลิวได้",
		id: "Volcanion menembakkan uap air di dalam tubuhnya menggunakan lengan di punggungnya. Kekuatannya mampu menghempaskan sebuah gunung."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ดูอัลเทอร์โบ",
			id: "Dual Turbo"
		},

		effect: {
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายเราได้สูงสุด 2 ตัว นำการ์ด [พลังงานพื้นฐาน[ไฟ]] จากตำแหน่งทิ้งการ์ดมาติดตัวละ 1 ใบ",
			id: "Pilih paling banyak 2 Pokémon Cadangan sendiri, lalu kenakan Energi Dasar {Api} masing-masing 1 lembar dari Trash."
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			th: "เฮฟวีอิมแพกต์",
			id: "Heavy Impact"
		},

		damage: 120,
		cost: ["Fire", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card