import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'es-es': "Snorlax",
		'it-it': "Snorlax",
		'pt-br': "Snorlax",
		'de-de': "Relaxo"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rolling Tackle",
				'fr-fr': "Roulé-Boulé",
				'es-es': "Placaje Giro",
				'it-it': "Rollazione",
				'pt-br': "Golpe de Colisão Rolante",
				'de-de': "Rolltackle"
			},

			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Impact",
				'fr-fr': "Gros Impact",
				'es-es': "Impacto Pesado",
				'it-it': "Impatto Pesante",
				'pt-br': "Impacto Pesado",
				'de-de': "Schwerer Einschlag"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep."
	},

	dexId: [143],

	thirdParty: {
		cardmarket: 427236,
		tcgplayer: 208456
	}
}

export default card
