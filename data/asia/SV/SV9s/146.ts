import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ฟรีเซอร์",
		'id-id': "Articuno"
	},

	illustrator: "Kuroimori",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'th-th': "มีพลังในการควบคุมน้ำแข็งได้ดั่งใจนึก ว่ากันว่ามันอาศัยอยู่บนภูเขา หิมะที่เยือกแข็งตลอดปี"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "สยายปีกเย็น",
			'id-id': "Kepakan Dingin"
		},

		effect: {
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[น้ำ]] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่ โปเกมอนนี้ แล้วสับสำรับการ์ด",
			'id-id': "Pilih paling banyak 2 lembar Energi Dasar {Air} dari Deck sendiri, lalu kenakan pada Pokémon ini. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ไอซ์บลาสต์",
			'id-id': "Ice Blast"
		},

		damage: 110,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card