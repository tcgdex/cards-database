import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โบรรอน",
		'id-id': "Varoom"
	},

	illustrator: "HAGIYA Kaoru",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'th-th': "ร่างที่แท้จริงคือส่วนที่เป็นเหล็กกล้า เกาะติดอยู่กับหินแล้วเปลี่ยนส่วนประกอบนั้นให้เป็นพลังงานที่ใช้ในการขับเคลื่อน",
		'id-id': "Tubuh baja Varoom adalah tubuh aslinya. Pokémon ini menempel di batu, mengubah kandungan batu tersebut menjadi energinya, lalu beraktivitas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "แข็งเกร็ง",
			'id-id': "Kaku"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		},

		cost: ["Metal"]
	}, {
		name: {
			'th-th': "กระโดดโหม่ง",
			'id-id': "Sundulan Meloncat"
		},

		damage: 20,
		cost: ["Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card