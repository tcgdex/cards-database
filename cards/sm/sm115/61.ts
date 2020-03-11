import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-61",
	localId: 61,

	// Card informations
	name: {
		en: "Misty's Cerulean City Gym",
		fr: "Arène d’Azuria d’Ondine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/61/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/61/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/61/high",
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
			fr: "Les attaques des Staross-GX (les vôtres et ceux de votre adversaire) infligent 40 dégâts supplémentaires au Pokémon Actif de l’adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
