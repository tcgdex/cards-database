import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV87",
	localId: "SV87",

	// Card informations
	name: {
		en: "Aether Paradise Conservation Area",
		fr: "Réserve Naturelle du Paradis Æther",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV87/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV87/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV87/high",
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
			fr: "Les Pokémon Grass de base et les Pokémon Lightning de base (les vôtres et ceux de votre adversaire) reçoivent 30 dégâts de moins des attaques de l’adversaire (après application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
