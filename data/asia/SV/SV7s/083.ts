import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "มาเค็นคานิ",
		'id-id': "Crabrawler"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'th-th': "ถึงก้ามจะหักไป ก็จะงอกใหม่อย่างรวดเร็ว ที่กระดองจะมีน้ำสต็อกไหลออกมา นิยมนำไปใช้ทำปาเอยา",
		'id-id': "Capit Crabrawler langsung tumbuh meskipun patah. Karena menghasilkan kaldu yang bagus, cangkang Pokémon ini populer sebagai bahan untuk membuat Paella."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "หนีบ",
			'id-id': "Capitan Keras"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'th-th': "ค้อนก้ามปู",
			'id-id': "Crabhammer"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card