import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-102",
	localId: 102,

	// Card informations
	name: {
		en: "Greedy Dice",
		fr: "Dés Avides",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/102/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/102/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vous l’avez récupérée en tant que carte Récompense face cachée, avant de l’ajouter à votre main.\n\nLancez une pièce. Si c’est face, récupérez 1 carte Récompense supplémentaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
