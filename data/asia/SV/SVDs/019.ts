import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "บูเบอร์",
		'id-id': "Magmar"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'th-th': "ทั่วตัวนั้นเผาไหม้อยู่ตลอดเวลา เป็นที่หวาดกลัวเพราะเป็นหนึ่งในสาเหตุของไฟไหม้",
		'id-id': "Seluruh tubuh Magmar selalu terbakar. Pokémon ini ditakuti sebagai salah satu penyebab terjadinya kebakaran."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "รวบรวม",
			'id-id': "Mengumpulkan"
		},

		effect: {
			'th-th': "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			'id-id': "Ambil 1 kartu dari atas Deck sendiri."
		},

		cost: ["Fire"]
	}, {
		name: {
			'th-th': "พ่นอัคคี",
			'id-id': "Memuntahkan Api"
		},

		damage: 40,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card