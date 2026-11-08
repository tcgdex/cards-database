import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth",
		'es-es': "Vigoroth",
		'it-it': "Vigoroth",
		'pt-br': "Vigoroth",
		'de-de': "Muntier"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		288,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool",
		'es-es': "Slakoth",
		'it-it': "Slakoth",
		'pt-br': "Slakoth",
		'de-de': "Bummelz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
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
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reckless Charge",
				'fr-fr': "Attaque Imprudente",
				'es-es': "Carga Descuidada",
				'it-it': "Carica Avventata",
				'pt-br': "Carga Indomável",
				'de-de': "Waghalsiger Sturmangriff"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon does 20 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Lancia una moneta. Se esce croce, questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Jogue uma moeda. Se sair coroa, o Pokémon causará 20 de danos a ele mesmo.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" fügt sich dieses Pokémon selbst 20 Schadenspunkte zu."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its heartbeat is fast and its blood so agitated that it can't sit still for one second.",
	},

	thirdParty: {
		cardmarket: 281746,
		tcgplayer: 92262
	}
}

export default card
