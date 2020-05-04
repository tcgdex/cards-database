import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-77",
	localId: 77,

	// Card informations
	name: {
		en: "Lucky Helmet",
		fr: "Casque Chance",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/77/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/77/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque fois que le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si le Pokémon est mis K.O.), piochez 2 cartes.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
