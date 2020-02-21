import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Énergie Rescousse fournit de l'Énergie Colorless. Si le Pokémon auquel est attachée cette carte est mis K.O. par une attaque, récupérez ce Pokémon dans votre main. (Défaussez toutes les cartes attachées à ce Pokémon.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
