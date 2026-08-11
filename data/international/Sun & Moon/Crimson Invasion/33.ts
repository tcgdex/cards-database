import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Alolan Graveler",
		'fr-fr': "Gravalanch d’Alola",
		'es-es': "Graveler de Alola",
		'it-it': "Graveler di Alola",
		'pt-br': "Graveler de Alola",
		'de-de': "Alola-Georok"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		75,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Alolan Geodude",
		'fr-fr': "Racaillou d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Corkscrew Punch",
				'fr-fr': "Poing Tire-Bouchon",
				'es-es': "Puño Tirabuzón",
				'it-it': "Pugno Rotante",
				'pt-br': "Soco Saca-rolha",
				'de-de': "Korkenzieherhieb"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Self-Destruct",
				'fr-fr': "Destruction",
				'es-es': "Autodestrucción",
				'it-it': "Autodistruzione",
				'pt-br': "Autodestruição",
				'de-de': "Finale"
			},
			effect: {
				'en-us': "This Pokémon does 100 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 100 dégâts.",
				'es-es': "Este Pokémon se hace 100 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 100 danni a se stesso.",
				'pt-br': "Este Pokémon causa 100 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 100 Schadenspunkte zu."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its preferred food is dravite. After it has eaten this mineral, crystals form inside the Pokémon, rising to the surface of part of its body.",
	},

	thirdParty: {
		cardmarket: 311883,
		tcgplayer: 149056
	}
}

export default card
