import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-62",
	localId: 62,

	// Card informations
	name: {
		en: "Evosoda",
		fr: "Évolusoda",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/62/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/62/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez dans votre deck une carte Évolution de l'un de vos Pokémon et placez-la sur ce dernier. (Cela équivaut à faire évoluer le Pokémon.) Mélangez ensuite votre deck. Vous ne pouvez pas utiliser cette carte pendant votre premier tour ni sur un Pokémon qui a été joué pendant ce tour.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
