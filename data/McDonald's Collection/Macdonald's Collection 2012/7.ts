import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",

	description: {
		en: "Its habitat is dark forests and caves. It emits ultrasonic waves from its nose to learn about its surroundings."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Psy Bolt",
			fr: "Choc Mental"
		},

		damage: 20,

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Woobat",
		fr: "Chovsourir"
	},

	rarity: "None",
	hp: 60,
	types: ["Psychic"],

	thirdParty: {
		tcgplayer: 90629
	}
}

export default card