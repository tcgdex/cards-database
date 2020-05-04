import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-122",
	localId: 122,

	// Card informations
	name: {
		en: "Eviolite",
		fr: "Évoluroc",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/122/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/122/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/122/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée est un Pokémon de base, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
