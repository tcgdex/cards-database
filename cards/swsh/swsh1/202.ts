import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-202",
	localId: 202,

	// Card informations
	name: {
		en: "Team Yell Grunt",
		fr: "Sbire de la Team Yell",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/202/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/202/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "nagimiso",



	attacks: [{
		name: {},
		text: {
			en: "Put an Energy attached to 1 of your opponent’s Pokémon into their hand.",
			fr: "Ajoutez à la main de votre adversaire une Énergie attachée à l’un de ses Pokémon.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
