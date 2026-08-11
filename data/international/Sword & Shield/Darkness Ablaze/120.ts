import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [227],

	name: {
		'en-us': "Skarmory",
		'fr-fr': "Airmure",
		'es-es': "Skarmory",
		'it-it': "Skarmory",
		'pt-br': "Skarmory",
		'de-de': "Panzaeron"
	},

	illustrator: "NC Empire",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Metal",
	],

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Metal Arms",
				'fr-fr': "Bras Métalliques",
				'es-es': "Extremidades Metálicas",
				'it-it': "Arti Metallici",
				'pt-br': "Braços Metálicos",
				'de-de': "Metallarme"
			},
			effect: {
				'en-us': "If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage.",
				'fr-fr': "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 40 puntos de daño más.",
				'it-it': "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 40 danni in più.",
				'pt-br': "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 40 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cutting Wind",
				'fr-fr': "Vent Glacial",
				'es-es': "Viento Helado",
				'it-it': "Vento Tagliente",
				'pt-br': "Vento Dilacerante",
				'de-de': "Schneidender Wind"
			},

			damage: 80,

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
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its body is draped in steel armor. It looks heavy, but it can fly at speeds of up to 185 miles an hour!"
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483479,
				tcgplayer: 219376
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483479,
				tcgplayer: 219376
			}
		},
	],
}

export default card
