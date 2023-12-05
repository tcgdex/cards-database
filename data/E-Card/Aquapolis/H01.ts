import { Card } from "../../../interfaces"
import Set from "../Aquapolis"

const card: Card = {
	set: Set,

	name: {
		de: "Ampharos"
	},

	attacks: [{
		name: {
			de: "Donnerschock"
		},

		damage: 20,

		effect: {
			de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
		},

		cost: ["Lightning"]
	}, {
		name: {
			de: "Energiereflektion"
		},

		damage: 50,

		effect: {
			de: "Falls du mindestens ein Pokémon auf deiner Bank hast und mindestens eine Basis-Energiekarte an Ampharos angelegt ist, nimm 1 dieser Energiekarten und lege sie an 1 dieser Pokémon an."
		},

		cost: ["Lightning", "Lightning", "Colorless"]
	}]
}

export default card