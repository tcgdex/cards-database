import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Drampa",
		'fr-fr': "Draïeul",
		'es-es': "Drampa",
		'it-it': "Drampa",
		'pt-br': "Drampa",
		'de-de': "Sen-Long"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Pulse",
				'fr-fr': "Draco-Choc",
				'es-es': "Pulso Dragón",
				'it-it': "Dragopulsar",
				'pt-br': "Pulso do Dragão",
				'de-de': "Drachenpuls"
			},
			effect: {
				'en-us': "Discard the top 2 cards of your deck.",
				'fr-fr': "Défaussez les 2 cartes du dessus de votre deck.",
				'es-es': "Descarta las 2 primeras cartas de tu baraja.",
				'it-it': "Scarta le prime due carte del tuo mazzo.",
				'pt-br': "Descarte as 2 cartas de cima do seu baralho.",
				'de-de': "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "The mountains it calls home are nearly two miles in height. On rare occasions, it descends to play with the children living in the towns below."
	},

	dexId: [780],

	thirdParty: {
		cardmarket: 436839,
		tcgplayer: 208469
	}
}

export default card
