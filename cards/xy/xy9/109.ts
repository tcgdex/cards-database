import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous pouvez jouer 2 cartes Énigme du Temps à la fois.\n\n• Si vous avez joué 1 carte, regardez les 3 cartes du dessus de votre deck et replacez-les dans l'ordre de votre choix.\n• Si vous avez joué 2 cartes, ajoutez 2 cartes de votre pile de défausse à votre main.",
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
