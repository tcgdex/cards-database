import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-105",
	localId: 105,

	// Card informations
	name: {
		en: "Steel Shelter",
		fr: "Bunker d'Acier",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/105/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/105/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/105/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque Pokémon Metal (les vôtres et ceux de votre adversaire) ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant les Pokémon concernés.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
