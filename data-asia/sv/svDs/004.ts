import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "โทรพิอุส",
		id: "Tropius"
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		th: "อาศัยอยู่ในป่าเขตร้อน เครือผลที่คอรสชาติหวานอร่อย 1 ปีจะออกผลแค่ 2 ครั้ง",
		id: "Tropius hidup di hutan tropis. Tandan di leher Pokémon ini rasanya manis dan lezat, dan berbuah 2 kali dalam 1 tahun."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ผลไม้เก็บสด ๆ",
			id: "Buah-buahan Baru Dipetik"
		},

		effect: {
			th: "ฟื้นฟู HP ของโปเกมอนบนเบนช์ฝ่ายเรา 1 ตัว [60]",
			id: "Pulihkan HP 1 Pokémon Cadangan sendiri sejumlah 60."
		},

		cost: ["Grass"]
	}, {
		name: {
			th: "คัตเตอร์ใบไม้",
			id: "Daun Pemotong"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card