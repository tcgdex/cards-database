import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-111",
	localId: 111,

	// Card informations
	name: {
		en: "Olivia",
		fr: "Alyxia",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/111/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/111/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/111/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/111/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 2 Pokémon-GX dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

