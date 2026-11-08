import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Nugget",
		'fr-fr': "Pépite",
		'es-es': "Pepita",
		'it-it': "Pepita",
		'pt-br': "Pepita",
		'de-de': "Nugget"
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "You can play this card only if you drew it from your deck at the beginning of your turn, before you put it into your hand.\n\nDraw 3 cards.",
		'fr-fr': "Vous ne pouvez jouer cette carte que si vous l'avez piochée dans votre deck au début de votre tour, et avant de l'ajouter à votre main.\n\nPiochez 3 cartes.",
		'es-es': "Puedes jugar esta carta solo si la has robado de tu baraja al principio de tu turno, antes de ponerla en tu mano.\n\nRoba 3 cartas.",
		'it-it': "Puoi giocare questa carta solo se l'hai pescata dal tuo mazzo all'inizio del tuo turno, prima di aggiungerla alle carte che hai in mano.\n\nPesca tre carte.",
		'pt-br': "Você só pode jogar esta carta se a tiver comprado do seu baralho no começo do seu turno, antes de colocá-la na sua mão.\n\nCompre 3 cartas.",
		'de-de': "Du kannst diese Karte nur spielen, wenn du sie zu Beginn deines Zuges von deinem Deck gezogen hast und bevor du sie auf deine Hand nimmst.\n\nZiehe 3 Karten."
	},

	trainerType: "Item",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458203,
				tcgplayer: 213267
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458203,
				tcgplayer: 213267
			}
		},
	],
}

export default card
