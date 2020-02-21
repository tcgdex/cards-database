import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-99",
	localId: 99,

	// Card informations
	name: {
		en: "Sparkling Robe",
		fr: "Peignoir Scintillant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/99/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/99/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Le Pokémon auquel cette carte est attachée ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant le Pokémon concerné.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
