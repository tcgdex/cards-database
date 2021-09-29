import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Engineer’s Adjustments",
		fr: "Réglages techniques",
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez une carte Énergie de votre main. Piochez 4 cartes dans votre deck.",
		en: "Discard an Energy card from your hand. Then. draw 4 cards."
	},

	trainerType: "Supporter",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0
}

export default card
