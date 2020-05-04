import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-103",
	localId: 103,

	// Card informations
	name: {
		en: "Ninja Boy",
		fr: "Ninja Amateur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/103/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/103/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/103/high",
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
			fr: "Choisissez l’un de vos Pokémon de base en jeu. Cherchez un Pokémon de base dans votre deck et échangez-le avec le Pokémon choisi. (Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours de jeu, et tous les autres effets restent sur le nouveau Pokémon.) Mélangez le premier Pokémon avec votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
