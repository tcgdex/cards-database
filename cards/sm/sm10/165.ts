import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-165",
	localId: 165,

	// Card informations
	name: {
		en: "Chip-Chip Ice Axe",
		fr: "Pic Qui Pique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/165/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/165/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/165/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/165/high",
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
			fr: "Regardez les 3 cartes du dessus du deck de votre adversaire et choisissez-en une. Votre adversaire mélange les autres cartes avec son deck. Ensuite, placez la carte choisie sur le dessus de son deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
