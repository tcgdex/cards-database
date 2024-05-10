import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "มิไรดอนex",
		id: "Miraidon ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			th: "ควิกดรอว์",
			id: "Quick Draw"
		},

		effect: {
			th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			id: "Ambil 2 kartu dari atas Deck sendiri."
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			th: "เทคโนเทอร์โบ",
			id: "Techno Turbo"
		},

		effect: {
			th: "เลือกการ์ด [พลังงานพื้นฐาน[สายฟ้า]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์",
			id: "Pilih 1 lembar Energi Dasar {Listrik} dari Trash sendiri, lalu kenakan pada Pokémon Cadangan."
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