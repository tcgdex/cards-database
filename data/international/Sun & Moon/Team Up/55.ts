import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Nidorina",
		'fr-fr': "Nidorina",
		'es-es': "Nidorina",
		'it-it': "Nidorina",
		'pt-br': "Nidorina",
		'de-de': "Nidorina"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		30,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nidoran♀",
		'fr-fr': "Nidoran♀",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Family Rescue",
				'fr-fr': "Sauvetage Familial",
				'es-es': "Rescate Familiar",
				'it-it': "Salva Famiglia",
				'pt-br': "Resgatar a Família",
				'de-de': "Familienrettung"
			},
			effect: {
				'en-us': "Shuffle 5 Psychic Pokémon from your discard pile into your deck.",
				'fr-fr': "Mélangez 5 Pokémon Psychic de votre pile de défausse avec votre deck.",
				'es-es': "Pon 5 Pokémon Psychic de tu pila de descartes en tu baraja y baraja todas las cartas.",
				'it-it': "Rimischia cinque Pokémon Psychic dalla tua pila degli scarti nel tuo mazzo.",
				'pt-br': "Embaralhe 5 Pokémon Psychic da sua pilha de descarte no seu baralho.",
				'de-de': "Mische 5 Psychic-Pokémon aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 30,

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
		'en-us': "The female has a gentle temperament. It emits ultrasonic cries that have the power to befuddle foes.",
	},

	thirdParty: {
		cardmarket: 368985,
		tcgplayer: 183833
	}
}

export default card
