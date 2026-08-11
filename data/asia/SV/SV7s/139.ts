import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "วูลู",
		'id-id': "Wooloo"
	},

	illustrator: "Wintr Wandr",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'th-th': "เส้นขนที่หยิกมีความสามารถในการรองรับการกระแทกสูง ต่อให้ตกจากหน้าผาก็ไม่สะทกสะท้าน",
		'id-id': "Bulu Wooloo yang bergelombang menjadi bantalan yang bagus sehingga jatuh dari tebing pun tidak masalah baginya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ชนทลาย",
			'id-id': "Meruntuhkan"
		},

		effect: {
			'th-th': "หากต้องการ ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Pemain dapat membuang Stadium yang ada di Arena ke Trash."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card