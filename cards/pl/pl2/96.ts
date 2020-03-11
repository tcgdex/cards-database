import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-96",
	localId: 96,

	// Card informations
	name: {
		en: "Team Galactic's Invention G-109 SP Radar",
		fr: "Radar SP Invention G-109 de Team Galaxie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/96/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/96/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Kent Kanetsuna",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une carte dans votre main et placez-la au dessus de votre deck. Choisissez un Pokémon SP dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. (Si c'est la seule carte que vous avez en main, vous ne pouvez pas la jouer).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
