import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "คาเตอร์ปี",
		id: "Caterpie"
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		th: "ขาสั้นแต่มีตัวดูด ไม่ว่าจะทางลาดหรือกำแพงก็สามารถเคลื่อนตัวไปต่อ ได้โดยไม่เหนื่อย",
		id: "Walau kaki Caterpie pendek, kakinya merupakan pengisap sehingga Pokémon ini dapat maju terus menaiki tanjakan dan dinding tanpa merasa lelah."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "แมลงกัด",
			id: "Gigitan Serangga"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card