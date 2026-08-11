import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Musharna",
		'fr-fr': "Mushana",
		'es-es': "Musharna",
		'it-it': "Musharna",
		'pt-br': "Musharna",
		'de-de': "Somnivora"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		518,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Munna",
		'fr-fr': "Munna",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hypnotic Ray",
				'fr-fr': "Onde Hypnotique",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Dream Eater",
				'fr-fr': "Dévorêve",
			},
			effect: {
				'en-us': "If the Defending Pokémon is not Asleep, this attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur n’est pas Endormi, cette attaque ne fait rien.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The mist emanating from their foreheads is packed with the dreams of people and Pokémon.",
	},

	thirdParty: {
		cardmarket: 279787,
		tcgplayer: 87659
	}
}

export default card
