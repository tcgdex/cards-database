import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Smoochum",
		'th-th': "มุจูล"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		'id-id': "Smoochum mandi begitu wajahnya kotor walau sedikit saja. Akan tetapi, tampaknya Pokémon ini tidak terlalu peduli pada kotoran di tubuhnya.",
		'th-th': "หากใบหน้าเปรอะเปื้อนแม้เพียงเล็กน้อยจะไปอาบน้ำ แต่ดูเหมือนว่า จะไม่ใส่ใจกับความสกปรกของร่างกาย"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Ciuman Hip Hip Hore",
			'th-th': "จูบครึ้มใจ"
		},

		effect: {
			'id-id': "Pilih paling banyak 2 lembar Energi Dasar {Psychic} dari Deck sendiri, lalu kenakan pada 1 Pokémon Cadangan. Kemudian, kocok Deck.",
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[พลังจิต]] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่ โปเกมอนบนเบนช์ 1 ตัว แล้วสับสำรับการ์ด"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card