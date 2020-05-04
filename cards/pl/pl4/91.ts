import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-91",

	localId: 91,

	name: {
		en: "Ultimate Zone",
		fr: "Zone ultime",
	},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Yusuke Ishikawa",

	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/91/low",
				fr: "https://assets.tcgdex.net/fr/pl/pl4/91/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/91/high",
				fr: "https://assets.tcgdex.net/fr/pl/pl4/91/high",
			},

	},


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.",
	},

}

export default card