import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ฮาซึโบ",
		'id-id': "Lotad"
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'th-th': "ใบไม้บนหัวมีคุณสมบัติกันเปื้อน ถึงจะให้โปเกมอนที่ตัวเต็มไปด้วยโคลน ขึ้นขี่ ใบไม้ก็ยังสะอาดเหมือนเดิม",
		'id-id': "Daun di atas kepalanya bersifat menangkal kotoran. Meskipun ia menaikkan Pokémon yang berlumur lumpur di atasnya, daun tersebut akan tetap bersih."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ปืนฉีดน้ำ",
			'id-id': "Pistol Air"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card