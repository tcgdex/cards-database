import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-234",
	localId: 234,

	// Card informations
	name: {
		en: "Red & Blue",
		fr: "Red et Blue",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/234/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/234/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/234/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/234/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez dans votre deck un Pokémon-GX qui évolue de l’un de vos Pokémon et placez-le sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck. (Vous ne pouvez utiliser cette carte ni pendant votre premier tour ni sur un Pokémon qui a été joué pendant ce tour.)\n\nLorsque vous jouez cette carte, vous pouvez défausser 2 autres cartes de votre main. Dans ce cas, cherchez jusqu’à 2 cartes Énergie de base dans votre deck et attachez-les au Pokémon que vous avez fait évoluer de cette façon.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
