import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Beauty",
		'fr-fr': "Canon",
		'es-es': "Modelo",
		'it-it': "Bellezza",
		'pt-br': "Modelo",
		'de-de': "Schönheit"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "If you go first, you may play this card during your first turn.\n\nDraw 2 cards.",
		'fr-fr': "Si vous jouez en premier, vous pouvez jouer cette carte pendant votre premier tour.\n\nPiochez 2 cartes.",
		'es-es': "Si sales primero, puedes jugar esta carta durante tu primer turno.\n\nRoba 2 cartas.",
		'it-it': "Se inizi per primo, puoi giocare questa carta durante il tuo primo turno.\n\nPesca due carte.",
		'pt-br': "Se você for primeiro, poderá jogar esta carta no seu primeiro turno.\n\nCompre 2 cartas.",
		'de-de': "Wenn du als Erster am Zug bist, kannst du diese Karte während deines ersten Zuges spielen.\n\nZiehe 2 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512450,
				tcgplayer: 226499
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512450,
				tcgplayer: 226499
			}
		},
	],
}

export default card
