import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "sui",
	category: "Pokemon",

	description: {
		en: "A fire burns inside, so it feels very warm to hug. It launches fireballs of 1,800 degrees Fahrenheit."
	},
	
	hp: 60,

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ember",
			fr: "Flammèche"
		},

		damage: 20,

		effect: {
			en: "Flip a coin. If tails, discard a Fire Energy attached to this Pokémon.",
			fr: "Lancez une pièce. Si c'est pile défaussez une Énergie  attachée à ce Pokémon."
		}
	}],

	name: {
		en: "Torchic",
		fr: "Poussifeu"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275058
	}
}

export default card