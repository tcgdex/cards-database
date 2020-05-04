import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-169",
	localId: 169,

	// Card informations
	name: {
		en: "Electromagnetic Radar",
		fr: "Radar Électromagnétique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/169/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/169/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/169/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/169/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Yoshinobu Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vous défaussez 2 autres cartes de votre main.\n\nCherchez une combinaison d’un maximum de 2 Pokémon-GX Lightning et Pokémon-EX Lightning, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
