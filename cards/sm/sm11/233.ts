import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-233",
	localId: 233,

	// Card informations
	name: {
		en: "Coach Trainer",
		fr: "Dresseurs Coach",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/233/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/233/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/233/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/233/high.png",
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
			fr: "Piochez 2 cartes. Si votre Pokémon Actif est un Pokémon ESCOUADE, piochez 2 cartes supplémentaires.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

