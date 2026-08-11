import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Totodile"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		id: "Meskipun kecil, Totodile itu perusuh. Jika ada sesuatu yang bergerak di hadapannya, ia akan langsung menggigitnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menggerogoti Erat-erat"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 10,
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