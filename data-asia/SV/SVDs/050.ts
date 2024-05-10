import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "มิวทูex",
		id: "Mewtwo ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			th: "ทรานสเฟอร์ชาร์จ",
			id: "Transfer Charge"
		},

		effect: {
			th: "เลือกการ์ด [พลังงานพื้นฐาน[พลังจิต]] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเราตามชอบ",
			id: "Pilih paling banyak 2 lembar Energi Dasar {Psychic} dari Trash sendiri, lalu kenakan sesukanya pada Pokémon sendiri."
		},

		cost: ["Psychic"]
	}, {
		name: {
			th: "โฟตอนคิเนซิส",
			id: "Photon Kinesis"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[พลังจิต]ที่ติดอยู่กับโปเกมอนฝ่ายเราทุกตัว x30",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi {Psychic} yang dikenakan pada semua Pokémon sendiri."
		},

		damage: "10+",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card