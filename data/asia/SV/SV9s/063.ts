import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "อุริมู",
		id: "Swinub"
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		th: "ใช้ปลายจมูกขุดพื้นดินเพื่อหาของกิน แม้จะเป็นพื้นดินที่มีน้ำแข็งปกคลุม ก็ขุดได้สบาย ๆ",
		id: "Ia menggali tanah dengan ujung hidungnya dan mencari makanan. Tanah yang membeku pun bukanlah masalah baginya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เรียกเพื่อน",
			id: "Memanggil Teman"
		},

		effect: {
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน]ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			id: "Pilih paling banyak 2 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "พุ่งชน",
			id: "Mendorong Jatuh"
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