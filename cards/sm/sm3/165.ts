import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-165",
	localId: 165,

	// Card informations
	name: {
		en: "Rescue Stretcher",
		fr: "Civière",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/165/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/165/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/165/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/165/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Yoshinobu Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l’une de ces options :\n\n•Ajoutez un Pokémon de votre pile de défausse à votre main.\n•Mélangez 3 Pokémon de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
