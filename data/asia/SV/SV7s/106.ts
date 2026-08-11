import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เกียร์",
		'id-id': "Klink"
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'th-th': "ร่างทั้งสองมีความคล้ายคลึงกันมากกว่าฝาแฝด หากอยู่กับร่างตัวอื่นจะเข้าขากันได้ไม่ค่อยดีนัก",
		'id-id': "Kedua tubuh Pokémon ini lebih dekat daripada saudara kembar sekalipun. Roda gigi dari tubuh Klink lain tidak bisa masuk dengan pas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ดึงดูด",
			'id-id': "Mengambil"
		},

		effect: {
			'th-th': "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			'id-id': "Ambil 1 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ลำแสง",
			'id-id': "Beam"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card