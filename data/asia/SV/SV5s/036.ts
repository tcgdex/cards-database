import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Croconaw"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		id: "Meskipun copot, taring Croconaw akan terus-menerus tumbuh. Di dalam mulutnya, selalu ada 48 taring lengkap."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Dorongan Balik"
		},

		effect: {
			id: "Tukar Pokémon ini dengan Pokémon Cadangan."
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card