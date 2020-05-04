import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-54",
	localId: 54,

	// Card informations
	name: {
		en: "Brock's Pewter City Gym",
		fr: "Arène d’Argenta de Pierre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/54/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/54/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/54/high",
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
			fr: "Les Onix-GX (les vôtres et ceux de votre adversaire) subissent 40 dégâts de moins des attaques de l’adversaire (après application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
