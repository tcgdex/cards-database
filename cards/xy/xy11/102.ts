import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



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
