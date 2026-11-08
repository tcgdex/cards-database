import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [384],

	name: {
		'en-us': "Rayquaza",
		'fr-fr': "Rayquaza",
		'es-es': "Rayquaza",
		'it-it': "Rayquaza",
		'pt-br': "Rayquaza",
		'de-de': "Rayquaza"
	},

	illustrator: "5ban Graphics",
	rarity: "Amazing Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
				"Fighting",
			],
			name: {
				'en-us': "Amazing Burst",
				'fr-fr': "Rafale Magnifique",
				'es-es': "Explosión Increíble",
				'it-it': "Scoppio Policromo",
				'pt-br': "Explosão Incrível",
				'de-de': "Atemberaubender Ausbruch"
			},
			effect: {
				'en-us': "Discard all basic Energy from this Pokémon. This attack does 80 damage for each type of basic Energy you discarded in this way.",
				'fr-fr': "Défaussez toute l'Énergie de base de ce Pokémon. Cette attaque inflige 80 dégâts pour chaque type d'Énergie de base défaussée de cette façon.",
				'es-es': "Descarta todas las Energías Básicas de este Pokémon. Este ataque hace 80 puntos de daño por cada tipo de Energía Básica que hayas descartado de esta manera.",
				'it-it': "Scarta tutte le Energie base da questo Pokémon. Questo attacco infligge 80 danni per ogni tipo di Energia base che hai scartato in questo modo.",
				'pt-br': "Descarte todas as Energias básicas deste Pokémon. Este ataque causa 80 pontos de dano para cada tipo de Energia básica descartada desta forma.",
				'de-de': "Lege alle Basis-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jeden auf diese Weise abgelegten Basis-Energietyp 80 Schadenspunkte zu."
			},
			damage: "80×",

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

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It flies in the ozone layer, way up high in the sky. Until recently, no one had ever seen it."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 512400,
				tcgplayer: 226594
			}
		},
	],
}

export default card
