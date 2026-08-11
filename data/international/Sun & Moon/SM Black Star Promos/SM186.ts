import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli",
		'es-es': "Flareon",
		'it-it': "Flareon",
		'pt-br': "Flareon",
		'de-de': "Flamara"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
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

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Spin",
				'fr-fr': "Danse Flamme",
				'es-es': "Giro Fuego",
				'it-it': "Turbofuoco",
				'pt-br': "Chama Furacão",
				'de-de': "Feuerwirbel"
			},
			effect: {
				'en-us': "Discard 2 Fire Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies Fire de ce Pokémon.",
				'es-es': "Descarta 2 Energías Fire de este Pokémon.",
				'it-it': "Scarta due Energie Fire assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias Fire deste Pokémon.",
				'de-de': "Lege 2 Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "If it inhales deeply, that's a sign it's about to attack. Prepare to be hit by flames of over 3,000 degrees Fahrenheit!",
	},
}

export default card
