import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [262],

	name: {
		'en-us': "Mightyena",
		'fr-fr': "Grahyèna",
		'es-es': "Mightyena",
		'it-it': "Mightyena",
		'pt-br': "Mightyena",
		'de-de': "Magnayen"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyèna",
		'es-es': "Poochyena",
		'it-it': "Poochyena",
		'pt-br': "Poochyena",
		'de-de': "Fiffyen"
	},

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Ferocious Bellow",
				'fr-fr': "Grognement Féroce",
				'es-es': "Gruñido Feroz",
				'it-it': "Ruggitorvo",
				'pt-br': "Rugido Feroz",
				'de-de': "Wildes Kläffen"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon's attacks do 50 less damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 50 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 50 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 50 danni in meno, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 50 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 50 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pitch-Black Fangs",
				'fr-fr': "Crocs Nuit Noire",
				'es-es': "Colmillos Azabaches",
				'it-it': "Zanne Buiopesto",
				'pt-br': "Presas do Breu",
				'de-de': "Pechschwarze Fänge"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It chases down prey in a pack of around ten. They defeat foes with perfectly coordinated teamwork."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511940,
				tcgplayer: 226556
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511940,
				tcgplayer: 226556
			}
		},
	],
}

export default card
