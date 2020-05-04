import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-92",
	localId: 92,

	// Card informations
	name: {
		en: "Dashing Pouch",
		fr: "Poche de Course",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/92/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/92/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée défausse de l’Énergie pour son Coût de Retraite, placez cette Énergie dans votre main plutôt que dans votre pile de défausse.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
