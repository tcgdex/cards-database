import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Finizen"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		id: "Ring air Finizen terbentuk dari campuran air laut dan cairan perekat yang dikeluarkan dari lubang di kepalanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Aqua Slash"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card