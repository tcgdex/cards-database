import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		fr: "Lithographie d'Alpha",
		en: "Alph Lithograph",
	},

	illustrator: "Milky Isobe",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez votre deck.",
		en: "Shuffle your deck!"
	},

	trainerType: "Item",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	hp: 0
}

export default card
