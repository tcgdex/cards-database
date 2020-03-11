import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-85",
	localId: 85,

	// Card informations
	name: {
		en: "Rare Candy",
		fr: "Super Bonbon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/85/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/85/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/85/high",
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
			fr: "Choisissez 1 de vos Pokémon de base en jeu. Si vous avez dans votre main un Pokémon de Niveau 2 qui est une évolution du Pokémon choisi, placez-la sur le Pokémon de base. (Cela équivaut à faire évoluer le Pokémon.) Vous ne pouvez pas utiliser cette carte pendant votre premier tour ni sur un Pokémon de base qui a été joué pendant ce tour.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
