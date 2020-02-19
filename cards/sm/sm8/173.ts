import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-173",
	localId: 173,

	// Card informations
	name: {
		en: "Faba",
		fr: "Saubohne",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/173/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/173/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/173/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/173/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 163,
		name: "take"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une carte Outil Pokémon ou une carte Énergie spéciale attachée à l’un des Pokémon de votre adversaire, ou une carte Stade en jeu, et placez-la dans la Zone Perdue.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

