import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'es-es': "Slowpoke",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke",
		'de-de': "Flegmon"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d’Boule",
				'es-es': "Golpe Cabeza",
				'it-it': "Bottintesta",
				'pt-br': "Cabeçada",
				'de-de': "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Whimsy Tackle",
				'fr-fr': "Charge Bizarre",
				'es-es': "Placaje Caprichoso",
				'it-it': "Capriccioazione",
				'pt-br': "Investida Fantástica",
				'de-de': "Launischer Tackle"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its long tail often breaks off. It doesn't really feel any pain, though, and the tail grows back, so Slowpoke isn't particularly bothered.",
	},

	thirdParty: {
		cardmarket: 297510,
		tcgplayer: 130954
	}
}

export default card
