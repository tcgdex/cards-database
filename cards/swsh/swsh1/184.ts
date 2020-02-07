import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-184",
	localId: 184,

	// Card informations
	name: {
		en: "Team Yell Grunt",
		fr: "Sbire de la Team Yell",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/184/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/184/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/184/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/184/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 15,
		name: "nagimiso"
	},



	attacks: [{
		name: {},
		text: {
			en: "Put an Energy attached to 1 of your opponent’s Pokémon into their hand.",
			fr: "Ajoutez à la main de votre adversaire une Énergie attachée à l’un de ses Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

