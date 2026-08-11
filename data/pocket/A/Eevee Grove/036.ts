import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Milcery",
		'fr-fr': "Crèmy"
	},

	illustrator: "Mina Nakai",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [868],
	hp: 50,
	types: ["Psychic"],

	description: {
		'en-us': "This Pokémon was born from sweet-smelling\nparticles in the air. Its body is made of cream.",
		'fr-fr': "Son corps de crème s'est composé à partir de particules au parfum sucré flottant dans l'air."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sweets Relay",
			'fr-fr': "Saupoudrage Sucré"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			'en-us': "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage.",
			'fr-fr': "Si un de vos Pokémon a utilisé  lors de votre dernier tour, cette attaque inflige 20 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card