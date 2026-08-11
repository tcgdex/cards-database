import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal",
		'es-es': "Frogadier",
		'it-it': "Frogadier",
		'pt-br': "Frogadier",
		'de-de': "Amphizel"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		657,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Froakie",
		'fr-fr': "Grenousse",
		'es-es': "Froakie",
		'it-it': "Froakie",
		'pt-br': "Froakie",
		'de-de': "Froxy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Duplicates",
				'fr-fr': "Duplicat'Eau",
				'es-es': "Duplicados de Agua",
				'it-it': "Idrocopie",
				'pt-br': "Duplicações de Água",
				'de-de': "Wasserduplikate"
			},
			effect: {
				'en-us': "Search your deck for up to 3 Frogadier and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez jusqu'à 3 Croâporal dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 3 Frogadier y ponlos en tu Banca. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo fino a tre Frogadier e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho até 3 Frogadier e coloque-os no seu Banco. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Amphizel und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

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
		'en-us': "Its swiftness is unparalleled. It can scale a tower of more than 2,000 feet in a minute's time.",
	},

	thirdParty: {
		cardmarket: 288214,
		tcgplayer: 111546
	}
}

export default card
