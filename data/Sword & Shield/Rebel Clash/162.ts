import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Nugget",
		fr: "Pépite",
		es: "Pepita",
		it: "Pepita",
		pt: "Pepita",
		de: "Nugget"
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play this card only if you drew it from your deck at the beginning of your turn, before you put it into your hand. \n\nDraw 3 cards.",
		fr: "Vous ne pouvez jouer cette carte que si vous l’avez piochée dans votre deck au début de votre tour, et avant de l’ajouter à votre main. \n\nPiochez 3 cartes.",
		es: "Puedes jugar esta carta solo si la has robado de tu baraja al principio de tu turno, antes de ponerla en tu mano.\n\nRoba 3 cartas.",
		it: "Puoi giocare questa carta solo se l’hai pescata dal tuo mazzo all’inizio del tuo turno, prima di aggiungerla alle carte che hai in mano. \n\nPesca tre carte.",
		pt: "Você só pode jogar esta carta se a tiver comprado do seu baralho no começo do seu turno, antes de colocá-la na sua mão.\n\nCompre 3 cartas.",
		de: "Du kannst diese Karte nur spielen, wenn du sie zu Beginn deines Zuges von deinem Deck gezogen hast und bevor du sie auf deine Hand nimmst.\n\nZiehe 3 Karten."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
