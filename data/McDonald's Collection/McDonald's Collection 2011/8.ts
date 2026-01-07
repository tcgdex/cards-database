import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	dexId: [551],

	description: {
		en: "It moves along below the sand’s surface, except for its nose and eyes. A dark membrane shields its eyes from the sun."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sand Tomb"
		},

		damage: 30,

		effect: {
			en: "The Defending Pokémon can’t retreat during your opponent’s next turn."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Sandile"
	},

	rarity: "None",
	hp: 70,
	types: ["Fighting"],

	thirdParty: {
		tcgplayer: 88913
	}
}

export default card