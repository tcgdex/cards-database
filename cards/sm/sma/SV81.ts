import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV81",
	localId: "SV81",

	// Card informations
	name: {
		en: "Aether Foundation Employee",
		fr: "Employés de la Fondation Æther",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV81/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV81/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 163,
		name: "take"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez 3 Pokémon avec « d’Alola » dans leur nom, de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
