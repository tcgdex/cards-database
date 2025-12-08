import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	description: {
		en: "It eats the dreams of people and Pokémon. When it eats a pleasant dream, it expels pink-colored mist."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Yawn"
		},

		effect: {
			en: "The Defending Pokémon is now Asleep."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Munna"
	},

	rarity: "None",
	hp: 60,
	types: ["Psychic"],

	thirdParty: {
		tcgplayer: 87642
	}
}

export default card
