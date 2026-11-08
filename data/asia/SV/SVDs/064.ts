import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "มิไรดอนex",
		'id-id': "Miraidon ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'th-th': "ควิกดรอว์",
			'id-id': "Quick Draw"
		},

		effect: {
			'th-th': "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			'id-id': "Ambil 2 kartu dari atas Deck sendiri."
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			'th-th': "เทคโนเทอร์โบ",
			'id-id': "Techno Turbo"
		},

		effect: {
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[สายฟ้า]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์",
			'id-id': "Pilih 1 lembar Energi Dasar {Listrik} dari Trash sendiri, lalu kenakan pada Pokémon Cadangan."
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card