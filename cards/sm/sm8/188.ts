import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-188",
	localId: 188,

	// Card informations
	name: {
		en: "Professor Elm's Lecture",
		fr: "Cours du Professeur Orme",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/188/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/188/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/188/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/188/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 83,
		name: "Hideki Ishikawa"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 3 Pokémon avec 60 PV ou moins dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
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

