import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "สไตรค์",
		'id-id': "Scyther"
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'th-th': "ใช้เคียวคมกริบถางหญ้าที่ขวางทาง เคลื่อนไหวได้เร็วจนมองตามไม่ทัน",
		'id-id': "Scyther melaju sambil memotong rerumputan menggunakan sabit tajamnya. Pergerakannya tidak bisa diikuti karena terlalu cepat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "แอสซิสต์สแลช",
			'id-id': "Assist Slash"
		},

		effect: {
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์",
			'id-id': "Pilih 1 lembar Energi Dasar {Daun} dari Trash sendiri, lalu kenakan pada Pokémon Cadangan."
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'th-th': "สไลซ์เบลด",
			'id-id': "Slicing Blade"
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