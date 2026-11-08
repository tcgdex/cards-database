import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "M Charizard EX",
		'fr-fr': "M-Dracaufeu EX",
		'es-es': "M-Charizard EX",
		'it-it': "M Charizard EX",
		'pt-br': "M-Charizard EX",
		'de-de': "M-Glurak EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 230,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Charizard-EX",
		'fr-fr': "Dracaufeu-EX",
		'es-es': "Charizard-EX",
		'it-it': "Charizard-EX",
		'pt-br': "Charizard-EX",
		'de-de': "Glurak-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wild Blaze",
				'fr-fr': "Feu Furieux",
				'es-es': "Fuego Salvaje",
				'it-it': "Fiamma Selvaggia",
				'pt-br': "Chama Selvagem",
				'de-de': "Wilder Flächenbrand"
			},
			effect: {
				'en-us': "Discard the top 5 cards of your deck.",
				'fr-fr': "Défaussez les 5 cartes du dessus de votre deck.",
				'es-es': "Descarta las 5 primeras cartas de tu baraja.",
				'it-it': "Scarta le prime cinque carte del tuo mazzo.",
				'pt-br': "Descarte os 5 cards de cima do seu baralho.",
				'de-de': "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 300,

		}
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 91246
	}
}

export default card
