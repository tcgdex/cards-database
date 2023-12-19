import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Impostor Professor Oak",
		fr: "Faux Professeur Chen",
		de: "Falscher Professor Eich"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Votre adversaire mélange sa main avec son deck, puis pioche 7 cartes.",
		de: "Dein Gegner mischt die Karten seiner Hand in seinen Stapel und zieht sieben neue Karten"
	}
}

export default card
