import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Litten",
		'fr-fr': "Flamiaou",
		'es-es': "Litten",
		'it-it': "Litten",
		'pt-br': "Litten",
		'de-de': "Flamiau"
	},
	illustrator: "Kouki Saitou",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		725,
	],
	hp: 60,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collecte",
				'es-es': "Coleccionar",
				'it-it': "Tassa",
				'pt-br': "Coleta",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'es-es': "Roba 1 carta.",
				'it-it': "Pesca una carta.",
				'pt-br': "Compre 1 carta.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "While grooming itself, it builds up fur inside its stomach. It sets the fur alight and spews fiery attacks, which change based on how it coughs.",
	},
}

export default card
