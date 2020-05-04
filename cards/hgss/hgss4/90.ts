import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-90",
	localId: 90,

	// Card informations
	name: {
		en: "Rescue Energy",
		fr: "Énergie Rescousse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/90/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/90/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Kent Kanetsuna",



	attacks: [{
		name: {},
		text: {
			fr: "Énergie Rescousse fournit de l'Énergie Colorless. Si le Pokémon auquel est attachée cette carte est mis K.O. par une attaque, récupérez ce Pokémon dans votre main. (Défaussez toutes les cartes attachées à ce Pokémon.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
