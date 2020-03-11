import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-97",
	localId: 97,

	// Card informations
	name: {
		en: "Amulet Coin",
		fr: "Pièce rune",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/97/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/97/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Daisuke Ito",



	attacks: [{
		name: {},
		text: {
			fr: "Attachez Pièce rune à 1 de vos Pokémon qui ne posséde pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Si le Pokémon auquel Pièce rune est attachée est votre Pokémon Actif à la fin de votre tour, piochez une carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
