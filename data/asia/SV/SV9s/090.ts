import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "กิโม <ของแมรี>",
		id: "Morgrem <Marnie>"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		th: "ชอบใช้กลยุทธ์การต่อสู้ที่ขี้ขลาดอย่างการลอบโจมตี เพราะไม่มั่นใจใน พละกำลังของตน",
		id: "Morgrem menyukai taktik licik seperti menggunakan serangan tipuan atau yang lainnya karena tidak percaya diri dengan kekuatan ototnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ต่อยตี",
			id: "Menohok"
		},

		damage: 60,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card