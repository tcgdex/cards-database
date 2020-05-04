import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-199",
	localId: 199,

	// Card informations
	name: {
		en: "Misty & Lorelei",
		fr: "Ondine et Olga",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/199/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/199/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/199/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/199/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 3 cartes Énergie Water dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.\n\nLorsque vous jouez cette carte, vous pouvez défausser 5 autres cartes de votre main. Dans ce cas, pendant ce tour, vos Pokémon Water peuvent utiliser leurs attaques GX même si vous avez déjà utilisé votre attaque GX.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
