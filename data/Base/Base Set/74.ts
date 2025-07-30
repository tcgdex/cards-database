import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Item Finder",
		fr: "Récupérateur",
		de: "Detektor"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez 2 des autres cartes de votre main pour placer une carte Dresseur de votre pile de défausse dans votre main.",
		de: "Entferne 2 Karten Deiner Hand, um eine Trainerkarte aus Deinem Ablagestapel aufzunehmen."
	},

	thirdParty: {
		cardmarket: 273769,
		tcgplayer: 42420
	}
}

export default card
