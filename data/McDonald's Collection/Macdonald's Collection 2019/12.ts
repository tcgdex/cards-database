import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Atsuko Nishida",
	category: "Pokemon",

	description: {
		en: "Current studies show it can evolve into an incredible eight different species of Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Gnaw"
		},

		damage: 20
	}],

	variants: [
		{ type: 'holo', size: 'standard' }
	],

	name: {
		en: "Eevee"
	},

	rarity: "None",
	hp: 60,
	types: ["Colorless"],

	thirdParty: {
		tcgplayer: 200977
	}
}

export default card