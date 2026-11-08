import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [450],

	name: {
		'en-us': "Hippowdon",
		'fr-fr': "Hippodocus",
		'es-es': "Hippowdon",
		'it-it': "Hippowdon",
		'pt-br': "Hippowdon",
		'de-de': "Hippoterus"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas",
		'es-es': "Hippopotas",
		'it-it': "Hippopotas",
		'pt-br': "Hippopotas",
		'de-de': "Hippopotas"
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Triple Smash",
				'fr-fr': "Triple Éclate",
				'es-es': "Golpe Triple",
				'it-it': "Tripla Schiacciata",
				'pt-br': "Pancada Tripla",
				'de-de': "Dreifachschmetterer"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 80 damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 80 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 80 pontos de dano para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
			},
			damage: "80×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Land Crush",
				'fr-fr': "Écras'Terre",
				'es-es': "Aterrizaje",
				'it-it': "Schiacciaterra",
				'pt-br': "Aperto de Terra",
				'de-de': "Schollenbrecher"
			},

			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Stones can get stuck in the ports on their bodies. Dwebble help dislodge such stones, so Hippowdon look after these Pokémon."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483349,
				tcgplayer: 219487
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483349,
				tcgplayer: 219487
			}
		},
	],
}

export default card
