import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",

	dexId: [702],

	description: {
		'en-us': "Its whiskers serve as antennas. By sending and receiving electrical waves, it can communicate with others over vast distances."
	},

	hp: 70,
	types: ["Fairy"],

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Nuzzle",
			'fr-fr': "Frotte-Frimousse"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		}
	}, {
		name: {
			'en-us': "Spiral Drain",
			'fr-fr': "Spirale Épuisante"
		},

		damage: 60,

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts à ce Pokémon."
		}
	}],

	name: {
		'en-us': "Dedenne",
		'fr-fr': "Dedenne"
	},

	rarity: "None",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 295146,
				tcgplayer: 275066
			}
		}
	]
}

export default card

