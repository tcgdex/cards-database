import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-175",
	localId: 175,

	// Card informations
	name: {
		en: "Evelyn",
		fr: "Vesper",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/175/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/175/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/175/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/175/high",
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
			fr: "Vous ne pouvez jouer cette carte que si le Pokémon Actif de votre adversaire est un Pokémon de Niveau 1.\n\nPiochez 4 cartes.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
