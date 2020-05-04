import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-135",
	localId: 135,

	// Card informations
	name: {
		en: "Rare Candy",
		fr: "Super Bonbon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/135/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/135/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/135/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/135/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	effect: {
		fr: "Choisissez l'un de vos Pokémon de base en jeu. Si vous avez dans votre main une carte de Niveau 2 qui est une évolution du Pokémon choisi, placez-la sur le Pokémon de base. (Cela équivaut à faire évoluer le Pokémon.) Vous ne pouvez pas utiliser cette carte pendant votre premier tour ni sur un Pokémon de base qui a été joué pendant ce tour.",
	},







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
