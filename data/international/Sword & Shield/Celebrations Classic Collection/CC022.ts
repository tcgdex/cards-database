import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	dexId: [150],
	set: Set,

	name: {
		'en-us': "Mewtwo EX",
		'fr-fr': "Mewtwo-EX"
	},

	illustrator: "Shizurow",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "X Ball",
			'fr-fr': "X Ball"
		},

		effect: {
			'en-us': "Does 20 damage times the amount of Energy attached to this Pokémon and the Defending Pokémon.",
			'fr-fr': "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à ce Pokémon et au Pokémon Défenseur."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Psydrive",
			'fr-fr': "Psykoforce"
		},

		effect: {
			'en-us': "Discard an Energy attached to this Pokémon.",
			'fr-fr': "Défaussez une Énergie attachées à ce Pokémon."
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576792,
				tcgplayer: 250339
			}
		},
	],
}

export default card
