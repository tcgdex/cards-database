import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-116",
	localId: 116,

	// Card informations
	name: {
		en: "Kiawe",
		fr: "Kiawe",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/116/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/116/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/116/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/116/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 4 cartes Énergie Fire dans votre deck et attachez-les à l’un de vos Pokémon. Mélangez ensuite votre deck. Votre tour se termine.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

