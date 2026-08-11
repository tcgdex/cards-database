import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "อุมิดิกดา",
		'id-id': "Wiglett"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'th-th': "จะหลบซ่อนตัวในทรายเมื่อได้กลิ่นที่มิกาลูซาปล่อยออกมาแม้จะห่างออกไปกว่า 20 เมตร",
		'id-id': "Wiglett dapat mencium bau yang dikeluarkan Veluza yang berada dalam jarak 20 meter, lalu bersembunyi di dalam pasir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "สาดน้ำ",
			'id-id': "Guyuran Air"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card