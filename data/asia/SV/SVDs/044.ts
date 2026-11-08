import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คอยล์",
		'id-id': "Magnemite"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		'th-th': "ลอยบนท้องฟ้าโดยไม่สนใจแรงโน้มถ่วงได้ด้วยคลื่นแม่เหล็กไฟฟ้าที่ปล่อยออกมาจากชิ้นส่วนซ้ายขวาของตน",
		'id-id': "Dengan gelombang elektromagnetik yang dikeluarkan dari unit yang ada di sisi kiri dan kanannya, Magnemite melawan arus gravitasi dan melayang di udara."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "แมกเน็ทชาร์จ",
			'id-id': "Magnet Charge"
		},

		effect: {
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[สายฟ้า]] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์ 1 ตัว",
			'id-id': "Pilih paling banyak 2 lembar Energi Dasar {Listrik} dari Trash sendiri, lalu kenakan pada 1 Pokémon Cadangan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "สปีดบอล",
			'id-id': "Speed Ball"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card