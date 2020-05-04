import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss2/76/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/76/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Wataru Kawahara",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, cherchez un Pokémon dans votre pile de défausse, montrez-le à votre adversaire, puis placez-le sur le dessus de votre deck. Si c'est pile, cherchez une carte Dresseur dans votre pile de défausse, montrez-la à votre adversaire, puis placez-la sur le dessus de votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
