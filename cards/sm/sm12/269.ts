import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-269",
	localId: 269,

	// Card informations
	name: {
		en: "Power Plant",
		fr: "Centrale d’Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/269/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/269/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/269/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/269/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 149,
		name: "aky CG Works"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Les Pokémon-GX et Pokémon-EX en jeu (les vôtres et ceux de votre adversaire) n’ont pas de talent.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

