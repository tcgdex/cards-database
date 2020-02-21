import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-102",
	localId: 102,

	// Card informations
	name: {
		en: "Max Elixir",
		fr: "Max Élixir",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/102/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/102/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 6 cartes du dessus de votre deck et attachez une carte Énergie de base que vous y trouvez à un Pokémon de base sur votre Banc. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
