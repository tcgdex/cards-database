import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Corphish"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		id: "Pokémon ini tetap baik-baik saja meskipun kualitas air habitatnya buruk. Populasinya terus bertambah karena tidak perlu berebut makanan dengan Pokémon air lainnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Capitan Keras"
		},

		damage: 60,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card