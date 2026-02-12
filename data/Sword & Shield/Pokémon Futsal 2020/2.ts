import { Card } from '../../../interfaces'
import Set from '../Pokémon Futsal 2020'

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		en: "Eevee on the Ball"
	},

	illustrator: "The Pokémon Company Art Team",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "It has the ability to alter the composition of its body to suit its surrounding environment."
	},
	

	types: ["Colorless",],

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Make the Assist"
		},

		effect: {
			en: "Attach a basic Energy card from your hand to 1 of your Benched Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Tackle"
		},

		damage: 20
	}],

	regulationMark: "D"
}

export default card