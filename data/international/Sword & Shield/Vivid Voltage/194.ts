import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Canon",
		'en-us': "Beauty",
		'es-es': "Modelo",
		'it-it': "Bellezza",
		'pt-br': "Modelo",
		'de-de': "Schönheit"
	},

	illustrator: "kirisAki",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'fr-fr': "Si vous jouez en premier, vous pouvez jouer cette carte pendant votre premier tour.\n\nPiochez 2 cartes.",
		'en-us': "If you go first, you may play this card during your first turn.\n\nDraw 2 cards.",
		'es-es': "Si sales primero, puedes jugar esta carta durante tu primer turno.\n\nRoba 2 cartas.",
		'it-it': "Se inizi per primo, puoi giocare questa carta durante il tuo primo turno.\n\nPesca due carte.",
		'pt-br': "Se você for primeiro, poderá jogar esta carta no seu primeiro turno.\n\nCompre 2 cartas.",
		'de-de': "Wenn du als Erster am Zug bist, kannst du diese Karte während deines ersten Zuges spielen.\n\nZiehe 2 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "D",


	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 512680,
				tcgplayer: 226501
			}
		},
	],
}

export default card
