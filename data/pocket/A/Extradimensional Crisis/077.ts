import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tapu Koko ex",
		'fr-fr': "Tokorico-ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [785],
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Plasma Hurricane",
			'fr-fr': "Ouragan Plasma"
		},

		damage: 20,
		cost: ["Lightning"],

		effect: {
			'en-us': "Take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
			'fr-fr': "Prenez une Énergie {L} de votre zone Énergie et attachez-la à ce Pokémon."
		}
	}, {
		name: {
			'en-us': "Mach Bolt",
			'fr-fr': "Éclair Fulgurant"
		},

		damage: 90,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
