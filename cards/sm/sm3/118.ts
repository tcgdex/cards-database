import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-118",
	localId: 118,

	// Card informations
	name: {
		en: "Mount Lanakila",
		fr: "Mont Lanakila",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/118/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/118/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/118/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Le Coût de Retraite de chaque Pokémon de base en jeu (les vôtres et ceux de votre adversaire) est augmenté de Colorless.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
