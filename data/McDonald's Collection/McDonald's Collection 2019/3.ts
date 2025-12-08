import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Yumi",
	category: "Pokemon",

	description: {
		en: "When angered, it spouts brilliant fire from all over its body. It doesn’t calm down until its opponent has burned to ash."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Controlled Burn"
		},

		effect: {
			en: "Discard the top card of your opponent’s deck."
		}
	}, {
		name: {
			en: "Flamethrower"
		},

		damage: 80,

		effect: {
			en: "Discard an Energy from this Pokémon."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Magmar"
	},

	rarity: "None",
	hp: 80,
	types: ["Fire"],

	thirdParty: {
		tcgplayer: 200963
	}
}

export default card
