import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Greavard"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		id: "Dikatakan bahwa Greavard adalah reinkarnasi Pokémon anjing liar yang meninggal tanpa pernah berinteraksi dengan manusia."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menggerogot"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			id: "Hollow Shot"
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
	regulationMark: "G"
}

export default card