import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ซีดรา",
		id: "Seadra"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		th: "ตัวผู้จะเป็นฝ่ายเลี้ยงดูลูก ระหว่างเลี้ยงดูลูกนั้นพิษของหนามบนหลังจะมีความรุนแรงและเข้มข้นขึ้น",
		id: "Seadra jantanlah yang membesarkan anak. Selama masa membesarkan anak, unsur racun pada duri di punggungnya menjadi lebih kuat dan pekat."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "กองหนุน",
			id: "Bala Bantuan"
		},

		effect: {
			th: "เลือกการ์ดโปเกมอนได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Pilih paling banyak 3 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Water"]
	}, {
		name: {
			th: "ครีบแหลมคม",
			id: "Sirip Tajam"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card