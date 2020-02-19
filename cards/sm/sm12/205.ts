import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-205",
	localId: 205,

	// Card informations
	name: {
		en: "Roxie",
		fr: "Strykna",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/205/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/205/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/205/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/205/high.png",
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
			fr: "Défaussez jusqu’à 2 Pokémon qui ne sont pas des Pokémon-GX ou des Pokémon-EX de votre main. Piochez 3 cartes pour chaque carte défaussée de cette façon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

