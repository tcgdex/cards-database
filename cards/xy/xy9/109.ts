import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-109",
	localId: 109,

	// Card informations
	name: {
		en: "Puzzle of Time",
		fr: "Énigme du Temps",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/109/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/109/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/109/high",
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
			fr: "Vous pouvez jouer 2 cartes Énigme du Temps à la fois.\n\n• Si vous avez joué 1 carte, regardez les 3 cartes du dessus de votre deck et replacez-les dans l'ordre de votre choix.\n• Si vous avez joué 2 cartes, ajoutez 2 cartes de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
