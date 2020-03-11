import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-167",
	localId: 167,

	// Card informations
	name: {
		en: "Dusk Stone",
		fr: "Pierre Nuit",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/167/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/167/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/167/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/167/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez dans votre deck, y compris parmi les Pokémon-GX, un Magirêve, Corboss, Lugulabre ou Exagide qui évolue de l’un de vos Pokémon en jeu, puis placez-le sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck. Vous pouvez utiliser cette carte pendant votre premier tour ou sur un Pokémon qui a été joué pendant ce tour.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
