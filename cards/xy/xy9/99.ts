import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-99",
	localId: 99,

	// Card informations
	name: {
		en: "Fighting Fury Belt",
		fr: "Ceinture Furie Combative",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/99/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/99/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/99/high",
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
			fr: "Ajoutez 40 PV au Pokémon de base auquel cette carte est attachée et ses attaques infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
