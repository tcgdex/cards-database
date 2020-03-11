import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-23",
	localId: 23,

	// Card informations
	name: {
		en: "Aqua Diffuser",
		fr: "Diffuseur Aqua",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/23/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/23/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/23/high",
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
			fr: "Le Pokémon de la Team Aqua auquel cette carte est attachée peut aussi utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			fr: "Diffuseur Aqua",
		},
		text: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
