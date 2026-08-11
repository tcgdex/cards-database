import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Ambipom",
		'fr-fr': "Capidextre",
		'es-es': "Ambipom",
		'it-it': "Ambipom",
		'pt-br': "Ambipom",
		'de-de': "Ambidiffel"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		424,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nice-Nice Catch",
				'fr-fr': "Jolie Jolie Prise",
				'es-es': "Captura Guay-Guay",
				'it-it': "Parapiglia",
				'pt-br': "Pegada Boa-boa",
				'de-de': "Gut-gut-Fang"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'es-es': "Roba 2 cartas.",
				'it-it': "Pesca due carte.",
				'pt-br': "Compre 2 cartas.",
				'de-de': "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bye-Bye Throw",
				'fr-fr': "Lancer Ciao Ciao",
				'es-es': "Lanzamiento Chao-Chao",
				'it-it': "Marameo",
				'pt-br': "Arremesso Tchau-tchau",
				'de-de': "Bye-bye-Wurf"
			},
			effect: {
				'en-us': "Discard up to 2 cards from your hand. This attack does 60 damage for each card you discarded in this way.",
				'fr-fr': "Défaussez jusqu’à 2 cartes de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
				'es-es': "Descarta hasta 2 cartas de tu mano. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
				'it-it': "Scarta fino a due carte che hai in mano. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
				'pt-br': "Descarte até 2 cartas da sua mão. Este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
				'de-de': "Lege bis zu 2 Karten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 60 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "In their search for comfortable trees, they get into territorial disputes with groups of Passimian. They win about half the time.",
	},

	thirdParty: {
		cardmarket: 408474,
		tcgplayer: 201292
	}
}

export default card
