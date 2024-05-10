import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "สไตรค์",
		id: "Scyther"
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		th: "ใช้เคียวคมกริบถางหญ้าที่ขวางทาง เคลื่อนไหวได้เร็วจนมองตามไม่ทัน",
		id: "Scyther melaju sambil memotong rerumputan menggunakan sabit tajamnya. Pergerakannya tidak bisa diikuti karena terlalu cepat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "แอสซิสต์สแลช",
			id: "Assist Slash"
		},

		effect: {
			th: "เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์",
			id: "Pilih 1 lembar Energi Dasar {Daun} dari Trash sendiri, lalu kenakan pada Pokémon Cadangan."
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			th: "สไลซ์เบลด",
			id: "Slicing Blade"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card