import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-19",
	localId: 19,

	// Card informations
	name: {
		en: "First Ticket",
		fr: "Ticket Prioritaire",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/19/low",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/19/high",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/19/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Avant de lancer une pièce pour décider qui joue en premier, vous pouvez jouer cette carte. Le lancer de pièce n'a pas lieu, et vous jouez en premier. Si les 2 joueurs jouent Ticket Prioritaire, procédez au lancer de pièce. (Vous ne pouvez jouer qu'un seul Ticket Prioritaire avant le lancer de pièce.)",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card
