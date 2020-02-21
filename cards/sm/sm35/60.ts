import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-60",
	localId: 60,

	// Card informations
	name: {
		en: "Great Ball",
		fr: "Super Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/60/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/60/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer un Pokémon que vous y trouvez et l’ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
