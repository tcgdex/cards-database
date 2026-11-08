import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Yamask",
		'th-th': "เดธมาส"
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'id-id': "Yamask gentayangan di reruntuhan pada malam hari. Kabarnya topeng yang dibawa oleh Pokémon ini adalah wajahnya saat masih hidup sebagai manusia.",
		'th-th': "เร่ร่อนไปตามโบราณสถานยามดึก ว่ากันว่าหน้ากากที่มีคือใบหน้าของ ตัวเองตอนเป็นคน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Bergumam",
			'th-th': "งึมงำ"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'id-id': "Mendendam Sedikit",
			'th-th': "เจ็บแค้นหน่อย"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card