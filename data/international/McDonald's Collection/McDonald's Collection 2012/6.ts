import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Kouki Saitou",
	category: "Pokemon",

	dexId: [587],

	description: {
		'en-us': "The energy made in its cheeks’ electric pouches is stored inside its membranes and released while it is gliding."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Thundershock",
			'fr-fr': "Éclair"
		},

		damage: 10,

		effect: {
			'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est Paralysé."
		}
	}, {
		name: {
			'en-us': "Acrobatics",
			'fr-fr': "Acrobatie"
		},

		damage: "10+",

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face."
		}
	}],

	name: {
		'en-us': "Emolga",
		'fr-fr': "Emolga"
	},

	rarity: "None",
	hp: 70,
	types: ["Lightning"],

	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281783,
				tcgplayer: 85193
			}
		}
	]
}

export default card

