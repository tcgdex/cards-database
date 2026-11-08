import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ไคเด็น",
		'id-id': "Wattrel"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		'th-th': "กระดูกที่ปีกจะผลิตกระแสไฟฟ้าเมื่อได้รับลม จะดำดิ่งลงสู่ทะเลเพื่อจับเหยื่อด้วยการช็อตด้วยไฟฟ้า",
		'id-id': "Kerangka sayap Wattrel menciptakan listrik jika menerima angin. Pokémon ini terjun ke laut, menyetrum mangsa, dan menangkapnya."
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

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ถลาลม",
			'id-id': "Melayang Rendah"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
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
	regulationMark: "G"
}

export default card