import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-118",
	localId: 118,

	// Card informations
	name: {
		en: "Team Galactic's Invention G-105 Poké Turn",
		fr: "Poké-Tour Invention G-105 de Team Galaxie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/118/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/118/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/118/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Makoto Imai",



	attacks: [{
		name: {},
		text: {
			fr: "Reprenez dans votre main 1 de vos Pokémon SP ainsi que toutes les cartes qui lui sont attachées.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
