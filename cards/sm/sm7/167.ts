import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-167",
	localId: 167,

	// Card informations
	name: {
		en: "TV Reporter",
		fr: "Journaliste Télé",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/167/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/167/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/167/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/167/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 3 cartes. Ensuite, défaussez une carte de votre main. Si votre deck ne contient aucune carte, vous ne pouvez pas jouer cette carte.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

