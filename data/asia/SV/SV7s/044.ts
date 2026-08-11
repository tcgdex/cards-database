import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ชอนชี",
		'id-id': "Chinchou"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'th-th': "ปล่อยกระแสไฟฟ้าขั้วบวกและขั้วลบออกจากปลายหนวดทั้งสองเพื่อทำให้อีกฝ่ายตัวชา",
		'id-id': "Ia mengalirkan listrik plus dan minus dari ujung 2 tentakelnya dan melumpuhkan lawannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ดับเบิลโวลต์",
			'id-id': "Double Bolt"
		},

		effect: {
			'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x20",
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card