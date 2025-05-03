import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Marill",
		th: "มาริล"
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		id: "Karena ekor Marill yang berisi lemak berfungsi sebagai pengganti kantong apung, Pokémon ini baik-baik saja meskipun berada di sungai berarus deras.",
		th: "หางที่เต็มไปด้วยไขมันข้างในทำหน้าที่เหมือนทุ่นลอยน้ำ แม้ลงแม่น้ำที่ ไหลเชี่ยวก็ไม่เป็นไร"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tubrukan Menggelinding",
			th: "กลิ้งโจมตี"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card