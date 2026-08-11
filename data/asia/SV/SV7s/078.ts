import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โดคูร็อก",
		'id-id': "Toxicroak"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'th-th': "มีถุงพิษในลำคอ เมื่อส่งเสียงร้องในลำคอ พิษที่สะสมไว้จะผสมจนเข้ากันและมีฤทธิ์แรงขึ้น",
		'id-id': "Toxicroak memiliki kantong racun di tenggorokannya. Ketika menguak, racunnya terkocok dan meningkatkan kekuatannya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ต่อยตี",
			'id-id': "Menohok"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'th-th': "คลีนฮิต",
			'id-id': "Clean Hit"
		},

		effect: {
			'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอนวิวัฒนาการ การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon Evolusi, kerusakan yang diberikan bertambah sejumlah 90."
		},

		damage: "90+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card