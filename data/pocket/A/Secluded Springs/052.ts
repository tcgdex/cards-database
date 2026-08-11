import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Malamar",
		'fr-fr': "Sepiatroce"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [687],
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Inkay"
	},

	description: {
		'en-us': "Gazing at its luminescent spots will quickly\ninduce a hypnotic state, putting the observer\nunder Malamar's control.",
		'fr-fr': "Il manipule à sa guise ceux qui se sont laissé hypnotiser en observant son corps lumineux trop longtemps."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Mental Surge",
			'fr-fr': "Émanations Cérébrales"
		},

		cost: ["Darkness"],

		effect: {
			'en-us': "This attack does 20 damage to each of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card