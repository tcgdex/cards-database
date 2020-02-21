import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-176",
	localId: 176,

	// Card informations
	name: {
		en: "Ingo & Emmet",
		fr: "Chammal et Chamsin",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/176/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/176/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/176/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/176/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez la carte du dessus de votre deck, puis choisissez l’une de ces options :\n\n• Défaussez votre main et piochez 5 cartes.\n• Défaussez votre main et piochez 5 cartes du dessous de votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
