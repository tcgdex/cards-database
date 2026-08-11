import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Chimecho",
		'fr-fr': "Eoko",
		'de-de': "Palimpalim"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [358],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Chime",
				'fr-fr': "Carillon",
				'de-de': "Chime"
			},
			effect: {
				'en-us': "Search your opponent's discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your opponent's discard pile.)",
				'fr-fr': "Choisissez une carte Supporter dans la pile de défausse de votre adversaire et appliquez l'effet de cette carte au lieu de l'effet de cette attaque. (La carte Supporter reste dans la pile de défausse de votre adversaire.)",
				'de-de': "Search your opponent's discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your opponent's discard pile.)"
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psychic Boom",
				'fr-fr': "Psycho-boom",
				'de-de': "Psychic Boom"
			},
			effect: {
				'en-us': "Does 10 damage times the amount of Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées au Pokémon Défenseur.",
				'de-de': "Dies 10 damage times the amount of Energy attached to the Defending Pokémon."
			},
			damage: "10×",

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
			type: "normal",
			thirdParty: {
				tcgplayer: 84292,
				cardmarket: 276091
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 84292,
				cardmarket: 276091
			}
		},
	]
}

export default card
