import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'es-es': "Mankey",
		'it-it': "Mankey",
		'pt-br': "Mankey",
		'de-de': "Menki"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		56,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scout",
				'fr-fr': "Espionnage",
				'es-es': "Explorar",
				'it-it': "Esplorazione",
				'pt-br': "Explorador",
				'de-de': "Späher"
			},
			effect: {
				'en-us': "Your opponent reveals their hand.",
				'fr-fr': "Votre adversaire dévoile sa main.",
				'es-es': "Tu rival enseña las cartas de su mano.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano.",
				'pt-br': "Seu oponente revela a própria mão.",
				'de-de': "Dein Gegner zeigt dir seine Handkarten."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Low Kick",
				'fr-fr': "Balayage",
				'es-es': "Patada Baja",
				'it-it': "Colpo Basso",
				'pt-br': "Rasteira",
				'de-de': "Fußkick"
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

	retreat: 1,

	description: {
		'en-us': "The smallest of things could cause it to lose its temper. Because it doesn't hold in its stress, this Pokémon can live a long time.",
	},

	thirdParty: {
		cardmarket: 369001,
		tcgplayer: 183849
	}
}

export default card
