import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Magneton",
		'th-th': "แรคอยล์"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'id-id': "Magneton terbentuk dari Magnemite yang menyatu. Dikatakan bahwa pada saat banyak bintik matahari, Pokémon ini akan bermunculan dalam jumlah yang banyak.",
		'th-th': "ว่ากันว่าคอยล์ชนิดเชื่อมติดกันจะปรากฏตัวเป็นจำนวนมากตอนที่เกิด จุดดับบนดวงอาทิตย์หลายจุด"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Pelepasan Listrik Berlebihan",
			'th-th': "คายประจุเกินขนาด"
		},

		effect: {
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri. Pokémon ini KO jika menggunakan Ability ini. Pilih paling banyak 3 lembar Energi Dasar dari Trash sendiri, lalu kenakan sesukanya pada Pokémon {Listrik} sendiri.",
			'th-th': "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เมื่อใช้แล้ว จะทำให้โปเกมอนนี้[หมดสภาพ] เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่ โปเกมอน[สายฟ้า]ฝ่ายเราตามชอบ"
		}
	}],

	attacks: [{
		name: {
			'id-id': "Lightning Ball",
			'th-th': "ไลท์นิงบอล"
		},

		damage: 40,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card