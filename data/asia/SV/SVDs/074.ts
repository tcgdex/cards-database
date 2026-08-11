import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โซลร็อก",
		'id-id': "Solrock"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'th-th': "แข็งแกร่งในช่วงกลางวันเพราะมีพลังงานแสงอาทิตย์เป็นแหล่งพลัง เมื่อหมุนตัว ร่างกายจะส่องแสง",
		'id-id': "Energi matahari merupakan sumber energi Solrock, sehingga Pokémon ini kuat pada siang hari. Saat berputar, tubuhnya akan bercahaya."
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
			'th-th': "โซลาร์บีม",
			'id-id': "Solar Beam"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card