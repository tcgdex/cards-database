import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-162",
	localId: 162,

	// Card informations
	name: {
		en: "Choice Band",
		fr: "Bandeau Choix",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/162/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/162/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/162/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/162/high",
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
			fr: "Les attaques du Pokémon auquel cette carte est attachée infligent 30 dégâts supplémentaires au Pokémon-GX Actif ou au Pokémon-EX Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
