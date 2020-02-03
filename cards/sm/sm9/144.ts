import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-144",
	localId: 144,

	// Card informations
	name: {
		en: "Ingo & Emmet",
		fr: "Chammal et Chamsin",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/144/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/144/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/144/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/144/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez la carte du dessus de votre deck, puis choisissez l’une de ces options :\n\n• Défaussez votre main et piochez 5 cartes.\n• Défaussez votre main et piochez 5 cartes du dessous de votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

