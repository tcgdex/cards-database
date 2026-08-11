import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Skarmory",
		'fr-fr': "Airmure",
		'es-es': "Skarmory",
		'it-it': "Skarmory",
		'pt-br': "Skarmory",
		'de-de': "Panzaeron"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		227,
	],

	hp: 100,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Iron Wing",
				'fr-fr': "Aile de Fer",
				'es-es': "Ala Férrea",
				'it-it': "Alaferro",
				'pt-br': "Asa de Ferro",
				'de-de': "Eisenflügel"
			},
			effect: {
				'en-us': "Discard a Metal Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie Metal attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía Metal unida a este Pokémon.",
				'it-it': "Scarta un'Energia Metal assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia Metal ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Metal-Energie auf deinen Ablagestapel."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "After nesting in bramble bushes, the wings of its chicks grow hard from scratches by thorns.",
	},

	thirdParty: {
		cardmarket: 281865,
		tcgplayer: 94627
	}
}

export default card
