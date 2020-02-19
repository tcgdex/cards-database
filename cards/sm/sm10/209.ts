import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-209",
	localId: 209,

	// Card informations
	name: {
		en: "Green's Exploration",
		fr: "Exploration de Leaf",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/209/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/209/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/209/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/209/high.png",
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
			fr: "Vous ne pouvez jouer cette carte que si vos Pokémon en jeu n’ont pas de talents.\n\nCherchez jusqu’à 2 cartes Dresseur dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

