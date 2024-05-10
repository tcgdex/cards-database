import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "บูเบอร์",
		id: "Magmar"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		th: "ทั่วตัวนั้นเผาไหม้อยู่ตลอดเวลา เป็นที่หวาดกลัวเพราะเป็นหนึ่งในสาเหตุของไฟไหม้",
		id: "Seluruh tubuh Magmar selalu terbakar. Pokémon ini ditakuti sebagai salah satu penyebab terjadinya kebakaran."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "รวบรวม",
			id: "Mengumpulkan"
		},

		effect: {
			th: "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			id: "Ambil 1 kartu dari atas Deck sendiri."
		},

		cost: ["Fire"]
	}, {
		name: {
			th: "พ่นอัคคี",
			id: "Memuntahkan Api"
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