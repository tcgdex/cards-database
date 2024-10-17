import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "มาเค็นคานิ",
		id: "Crabrawler"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		th: "ถึงก้ามจะหักไป ก็จะงอกใหม่อย่างรวดเร็ว ที่กระดองจะมีน้ำสต็อกไหลออกมา นิยมนำไปใช้ทำปาเอยา",
		id: "Capit Crabrawler langsung tumbuh meskipun patah. Karena menghasilkan kaldu yang bagus, cangkang Pokémon ini populer sebagai bahan untuk membuat Paella."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "หนีบ",
			id: "Capitan Keras"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "ค้อนก้ามปู",
			id: "Crabhammer"
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