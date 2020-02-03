import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-232",
	localId: 232,

	// Card informations
	name: {
		en: "N's Resolve",
		fr: "Résolution de N",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/232/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/232/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/232/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/232/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 100,
		name: "Mana Ibe"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez les 6 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie de base, attachez-les à l’un de vos Pokémon Dragon de Banc.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

