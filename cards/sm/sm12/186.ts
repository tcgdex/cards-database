import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-186",
	localId: 186,

	// Card informations
	name: {
		en: "Bellelba & Brycen-Man",
		fr: "Jujube et Zhuman",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/186/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/186/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/186/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/186/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Hideki Ishikawa",



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez 3 cartes du dessus du deck de chaque joueur.\n\nLorsque vous jouez cette carte, vous pouvez défausser 3 autres cartes de votre main. Dans ce cas, chaque joueur défausse ses Pokémon de Banc jusqu’à avoir 3 Pokémon de Banc. Votre adversaire défausse en premier.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
