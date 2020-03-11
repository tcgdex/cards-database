import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-138",
	localId: 138,

	// Card informations
	name: {
		en: "Giovanni's Scheme",
		fr: "Combine de Giovanni",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/138/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/138/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/138/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/138/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l'une de ces options : \n\n•Piochez des cartes jusqu'à ce que vous ayez 5 cartes en main.\n•Pendant ce tour, les attaques de votre Pokémon infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
