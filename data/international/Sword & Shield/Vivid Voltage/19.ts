import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [781],

	name: {
		'en-us': "Dhelmise",
		'fr-fr': "Sinistrail",
		'es-es': "Dhelmise",
		'it-it': "Dhelmise",
		'pt-br': "Dhelmise",
		'de-de': "Moruda"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hook",
				'fr-fr': "Crochet",
				'es-es': "Garfio",
				'it-it': "Uncino",
				'pt-br': "Gancho",
				'de-de': "Haken"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Special Anchor",
				'fr-fr': "Ancrage Spécial",
				'es-es': "Ancla Especial",
				'it-it': "Ancora Speciale",
				'pt-br': "Âncora Especial",
				'de-de': "Spezial-Anker"
			},
			effect: {
				'en-us': "If this Pokémon has any Special Energy attached, this attack does 60 more damage.",
				'fr-fr': "Si de l'Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene alguna Energía Especial unida a él, este ataque hace 60 puntos de daño más.",
				'it-it': "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 60 danni in più.",
				'pt-br': "Se este Pokémon tiver alguma Energia Especial ligada a ele, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "After a piece of seaweed merged with debris from a sunken ship, it was reborn as this ghost Pokémon."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511515,
				tcgplayer: 226383
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511515,
				tcgplayer: 226383
			}
		},
	],
}

export default card
