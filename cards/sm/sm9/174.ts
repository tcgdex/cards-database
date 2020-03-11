import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-174",
	localId: 174,

	// Card informations
	name: {
		en: "Erika's Hospitality",
		fr: "Hospitalité d’Erika",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/174/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/174/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/174/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/174/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vous avez 4 autres cartes ou moins dans votre main.\n\nPiochez une carte pour chacun des Pokémon en jeu de votre adversaire.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
