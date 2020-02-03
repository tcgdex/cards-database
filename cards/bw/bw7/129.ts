import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-129",
	localId: 129,

	// Card informations
	name: {
		en: "Great Ball",
		fr: "Super Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/129/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/129/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/129/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/129/high.png",
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
			fr: "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer un Pokémon que vous y trouvez et l'ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

