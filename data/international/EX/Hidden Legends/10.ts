import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina",
		'de-de': "Meditalis"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [308],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Meditikka"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Meditate",
				'fr-fr': "Yoga",
				'de-de': "Meditate"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur.",
				'de-de': "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Chakra Points",
				'fr-fr': "Points de chakra",
				'de-de': "Chakra Points"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each card in your opponent's hand.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque carte dans la main de votre adversaire.",
				'de-de': "Does 10 damage plus 10 more damage for each card in your opponent's hand."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87271,
				cardmarket: 276084
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 87271,
				cardmarket: 276084
			}
		},
	]
}

export default card
