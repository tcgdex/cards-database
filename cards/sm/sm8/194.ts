import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-194",
	localId: 194,

	// Card informations
	name: {
		en: "Memory Energy",
		fr: "Énergie Mémoire",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/194/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/194/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/194/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/194/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],





	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l’Énergie Colorless.\n\nLe Pokémon auquel cette carte est attachée peut utiliser les attaques de ses précédentes Évolutions. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser chaque attaque.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

