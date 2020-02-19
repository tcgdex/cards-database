import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-76",
	localId: 76,

	// Card informations
	name: {
		en: "Good Rod",
		fr: "Bonne canne",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/76/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/76/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/76/high.png",
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
			fr: "Lancez une pièce. Si c'est face, cherchez un Pokémon dans votre pile de défausse, montrez-le à votre adversaire, puis placez-le sur le dessus de votre deck. Si c'est pile, cherchez une carte Dresseur dans votre pile de défausse, montrez-la à votre adversaire, puis placez-la sur le dessus de votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

