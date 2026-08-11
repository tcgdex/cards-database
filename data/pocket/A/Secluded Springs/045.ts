import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Relicanth",
		'fr-fr': "Relicanth"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [369],
	hp: 90,
	types: ["Fighting"],

	description: {
		'en-us': "Rock-hard scales and oil-filled swim bladders\nallow this Pokémon to survive the intense water\npressure of the deep sea.",
		'fr-fr': "Il peut supporter la pression des profondeurs grâce à ses écailles aussi solides que le roc et à ses vessies natatoires remplies de graisse."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Take Down",
			'fr-fr': "Bélier"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card