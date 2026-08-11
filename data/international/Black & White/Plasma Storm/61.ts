import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Gallade",
		'fr-fr': "Gallame",
		'es-es': "Gallade",
		'it-it': "Gallade",
		'pt-br': "Gallade",
		'de-de': "Galagladi"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		475,
	],

	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Powerful Storm",
				'fr-fr': "Tempête Puissante",
			},
			effect: {
				'en-us': "Does 20 damage times the amount of Energy attached to all of your Pokémon.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous vos Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swift Lunge",
				'fr-fr': "Estocade",
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},
			damage: 80,

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
		'en-us': "When trying to protect someone, it extends its elbows as if they were swords and fights savagely.",
	},

	thirdParty: {
		cardmarket: 280801,
		tcgplayer: 85606
	}
}

export default card
