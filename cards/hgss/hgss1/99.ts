import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-99",
	localId: 99,

	// Card informations
	name: {
		en: "Pokémon Reversal",
		fr: "Inversion de Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/99/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/99/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/99/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/99/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c’est face, choisissez un Pokémon du Banc de votre adversaire et échangez-le avec son Pokémon actif.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card

