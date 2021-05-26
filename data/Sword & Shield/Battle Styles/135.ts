import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Sordward & Shielbert",
		fr: "Jean-Fleuret et Jean-Targe"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Choose a Trainer card from your discard pile. Then, ask your opponent if you may put it into your hand. If yes, put that card into your hand. If no, draw 3 cards.",
		fr: "Choisissez une carte Dresseur dans votre pile de défausse. Ensuite, demandez à votre adversaire si vous pouvez l’ajouter à votre main. Si oui, ajoutez cette carte à votre main. Sinon, piochez 3 cartes."
	},

	trainerType: "Supporter"
}

export default card