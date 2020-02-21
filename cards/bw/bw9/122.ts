import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-122",
	localId: 122,

	// Card informations
	name: {
		en: "Ultra Ball",
		fr: "Hyper Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/122/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/122/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/122/high",
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
			fr: "Défaussez 2 cartes de votre main. (Si vous ne pouvez pas défausser 2 cartes, vous ne pouvez pas jouer cette carte.) Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
