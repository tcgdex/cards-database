import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "M Gardevoir EX",
		'fr-fr': "M-Gardevoir EX",
		'es-es': "M-Gardevoir EX",
		'it-it': "M Gardevoir EX",
		'pt-br': "M-Gardevoir EX",
		'de-de': "M-Guardevoir EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 210,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Gardevoir-EX",
		'fr-fr': "Gardevoir-EX",
		'es-es': "Gardevoir-EX",
		'it-it': "Gardevoir-EX",
		'pt-br': "Gardevoir-EX",
		'de-de': "Guardevoir-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Brilliant Arrow",
				'fr-fr': "Flèche Éclatante",
				'es-es': "Flecha Brillante",
				'it-it': "Freccia Brillante",
				'pt-br': "Seta Brilhante",
				'de-de': "Glänzender Pfeil"
			},
			effect: {
				'en-us': "This attack does 30 damage times the amount of Fairy Energy attached to all of your Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies Fairy attachées à tous vos Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño por cada Energía Fairy unida a todos tus Pokémon.",
				'it-it': "Questo attacco infligge 30 danni per ogni Energia Fairy assegnata ai tuoi Pokémon.",
				'pt-br': "Esse ataque causa 30 de danos vezes a quantidade de Energia Fairy ligada a todos os seus Pokémon.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der an all deinen Pokémon angelegten Fairy-Energien zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 96054
	}
}

export default card
