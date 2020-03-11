import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-180",
	localId: 180,

	// Card informations
	name: {
		en: "Nita",
		fr: "Nix",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/180/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/180/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/180/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/180/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si le Pokémon Actif de votre adversaire est un Pokémon de base.\n\nPlacez une Énergie du Pokémon Actif de votre adversaire sur le dessus de son deck.",
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
