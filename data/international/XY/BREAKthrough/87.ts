import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Hawlucha",
		'fr-fr': "Brutalibré",
		'es-es': "Hawlucha",
		'it-it': "Hawlucha",
		'pt-br': "Hawlucha",
		'de-de': "Resladero"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		701,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "High Jump Kick",
				'fr-fr': "Pied Voltige",
				'es-es': "Patada Salto Alta",
				'it-it': "Calcinvolo",
				'pt-br': "Chute de Pulo Alto",
				'de-de': "Turmkick"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Skyward Kick",
				'fr-fr': "Coup d'Pied Aérien",
				'es-es': "Patada Cielo",
				'it-it': "Calcinalto",
				'pt-br': "Chute para o Céu",
				'de-de': "Hochschnellender Kick"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "Os danos deste ataque não são afetados por Resistência.",
				'de-de': "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 40,

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
		'en-us': "With its wings, it controls its position in the air. It likes to attack from above, a maneuver that is difficult to defend against.",
	},

	thirdParty: {
		cardmarket: 286333,
		tcgplayer: 107206
	}
}

export default card
