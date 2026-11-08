import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Beheeyem",
		'fr-fr': "Neitram",
		'es-es': "Beheeyem",
		'it-it': "Beheeyem",
		'pt-br': "Beheeyem",
		'de-de': "Megalon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		606,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Elgyem",
		'fr-fr': "Lewsor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Brain Control",
				'fr-fr': "Contrôle Cérébral",
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand. Choose a card from there and put it on the bottom of your opponent's deck.",
				'fr-fr': "Votre adversaire montre sa main. Choisissez-y une carte et mettez-la en dessous du deck de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale Psy",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can manipulate an opponent's memory. Apparently, it communicates by flashing its three different-colored fingers.",
	},

	thirdParty: {
		cardmarket: 280287,
		tcgplayer: 83779
	}
}

export default card
