import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-179",
	localId: 179,

	// Card informations
	name: {
		en: "Kahili",
		fr: "Kahili",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/179/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/179/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/179/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/179/high.png",
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
			fr: "Piochez 2 cartes. Ensuite, lancez une pièce. Si c’est face, et si vous avez joué cette carte Kahili de votre main, placez cette carte dans votre main plutôt que dans votre pile de défausse. Si votre deck ne contient aucune carte, vous ne pouvez pas jouer cette carte.",
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

