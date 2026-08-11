import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "อุริมู",
		'id-id': "Swinub"
	},

	illustrator: "Nakamura Ippan",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'th-th': "ใช้ปลายจมูกขุดพื้นดินเพื่อหาของกิน แม้จะเป็นพื้นดินที่มีน้ำแข็งปกคลุม ก็ขุดได้สบาย ๆ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เรียกเพื่อน",
			'id-id': "Memanggil Teman"
		},

		effect: {
			'th-th': "เลือกการ์ดโปเกมอน[พื้นฐาน]ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			'id-id': "Pilih paling banyak 2 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "พุ่งชน",
			'id-id': "Mendorong Jatuh"
		},

		damage: 10,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card