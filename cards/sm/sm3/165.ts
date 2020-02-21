import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



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
