import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-150",
	localId: 150,

	// Card informations
	name: {
		en: "Underground Expedition",
		fr: "Expédition Souterraine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/150/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/150/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/150/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/150/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 4 cartes du dessous de votre deck et ajoutez 2 d’entre elles à votre main. Placez les autres cartes en dessous de votre deck dans l’ordre de votre choix.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
