import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Espeon",
		'fr-fr': "Mentali"
	},

	illustrator: "rika",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [196],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Eevee"
	},

	description: {
		'en-us': "The tip of its forked tail quivers when it is\npredicting its opponent's next move.",
		'fr-fr': "Quand il prédit la prochaine attaque de son adversaire, l'extrémité fourchue de sa queue frémit."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Energy Crush",
			'fr-fr': "Écras'Énergie"
		},

		damage: 20,
		cost: ["Psychic"],

		effect: {
			'en-us': "This attack does 20 damage for each Energy attached to all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card