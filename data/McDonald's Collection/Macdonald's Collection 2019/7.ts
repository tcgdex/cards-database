import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Shibuzoh.",
	category: "Pokemon",


	dexId: [92],
	description: {
		en: "Should a strange light be seen flickering in an abandoned building, Gastly is lurking there."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ominous Eyes"
		},

		effect: {
			en: "Put 1 damage counter on 1 of your opponent’s Pokémon."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Gastly"
	},

	rarity: "None",
	hp: 50,
	types: ["Psychic"],

	thirdParty: {
		tcgplayer: 200969
	}
}

export default card