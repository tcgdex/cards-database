import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-100",
	localId: 100,

	// Card informations
	name: {
		en: "Frozen City",
		fr: "Ville Gelée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/100/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/100/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque fois qu'un joueur attache une Énergie de sa main à 1 de ses Pokémon (excepté les Pokémon de la Team Plasma), placez 2 marqueurs de dégâts sur le Pokémon auquel l'Énergie a été attachée.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
