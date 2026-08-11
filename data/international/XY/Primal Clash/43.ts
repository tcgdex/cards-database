import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'es-es': "Feebas",
		'it-it': "Feebas",
		'pt-br': "Feebas",
		'de-de': "Barschwa"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		349,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Float On",
				'fr-fr': "Flottaison",
				'es-es': "Flotar",
				'it-it': "Galleggio",
				'pt-br': "Flutuar",
				'de-de': "Umhertreiben"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 10 dégâts.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon se hace 10 puntos de daño a sí mismo.",
				'it-it': "Lancia una moneta. Se esce croce, questo Pokémon infligge 10 danni a se stesso.",
				'pt-br': "Jogue uma moeda. Se sair coroa, o Pokémon causará 10 de danos a ele mesmo.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" fügt sich dieses Pokémon selbst 10 Schadenspunkte zu."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is the shabbiest Pokémon of all. It forms in schools and lives at the bottom of rivers.",
	},

	thirdParty: {
		cardmarket: 273574,
		tcgplayer: 95940
	}
}

export default card
