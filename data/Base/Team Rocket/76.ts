import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Imposter Oak's Revenge",
		fr: "La revanche de Chen, l'imposteur",
		de: "Die Rache des falschen Profess"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez une carte de votre main pour pouvoir jouer cette carte. Votre adversaire mélange sa main avec son deck, puis pioche 4 cartes.",
		de: "Lege eine Karte von deiner hand ab, um diese Karte zu spielen. Dein gegner mischt seine oder ihre hand in sein oder ihr Deck und zieht dann vier Karten."
	}
}

export default card
