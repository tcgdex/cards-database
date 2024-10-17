import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โบรรอน",
		id: "Varoom"
	},

	illustrator: "HAGIYA Kaoru",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		th: "ร่างที่แท้จริงคือส่วนที่เป็นเหล็กกล้า เกาะติดอยู่กับหินแล้วเปลี่ยนส่วนประกอบนั้นให้เป็นพลังงานที่ใช้ในการขับเคลื่อน",
		id: "Tubuh baja Varoom adalah tubuh aslinya. Pokémon ini menempel di batu, mengubah kandungan batu tersebut menjadi energinya, lalu beraktivitas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "แข็งเกร็ง",
			id: "Kaku"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		},

		cost: ["Metal"]
	}, {
		name: {
			th: "กระโดดโหม่ง",
			id: "Sundulan Meloncat"
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