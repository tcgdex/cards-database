import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คอยล์",
		'id-id': "Magnemite"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'th-th': "ลอยบนท้องฟ้าโดยไม่สนใจแรงโน้มถ่วงได้ด้วยคลื่นแม่เหล็กไฟฟ้าที่ปล่อยออกมาจากชิ้นส่วนซ้ายขวาของตน",
		'id-id': "Dengan gelombang elektromagnetik yang dikeluarkan dari unit yang ada di sisi kiri dan kanannya, Magnemite melawan arus gravitasi dan melayang di udara."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "กระแทก",
			'id-id': "Menyeruduk"
		},

		damage: 10,
		cost: ["Lightning"]
	}, {
		name: {
			'th-th': "สปีดบอล",
			'id-id': "Speed Ball"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card