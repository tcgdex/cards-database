import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-138",
	localId: 138,

	// Card informations
	name: {
		en: "Dangerous Drill",
		fr: "Perceuse Dangereuse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/138/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/138/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/138/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/138/high",
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
			fr: "Vous ne pouvez jouer cette carte que si vous défaussez un Pokémon Darkness de votre main.\n\nDéfaussez une carte Outil Pokémon ou une carte Énergie spéciale de l’un des Pokémon de votre adversaire, ou défaussez toute carte Stade en jeu.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
