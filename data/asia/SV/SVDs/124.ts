import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เฮอเดอเรีย",
		'id-id': "Herdier"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'th-th': "ขนดำที่ปกคลุมร่างกายนั้นหนาและมีความยืดหยุ่น เขี้ยวคม ๆ ก็สามารถเด้งคืนกลับไปได้",
		'id-id': "Rambut hitam yang menyelimuti tubuh Herdier tebal dan membal. Taring tajam pun dapat dipantulkan oleh rambut tersebut."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "เตะกลับหลัง",
			'id-id': "Tendangan Belakang"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ตบหนัก",
			'id-id': "Hantaman Penuh Tenaga"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card