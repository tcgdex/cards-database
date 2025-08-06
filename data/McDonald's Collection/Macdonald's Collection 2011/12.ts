import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "MAHOU",
	category: "Pokemon",

	description: {
		en: "It touches others with the feelers on its ears, using the sound of their heartbeats to tell how they are feeling."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Double Slap"
		},

		damage: "30×",

		effect: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Audino"
	},

	rarity: "None",
	hp: 80,
	types: ["Colorless"],

	thirdParty: {
		tcgplayer: 83660
	}
}

export default card