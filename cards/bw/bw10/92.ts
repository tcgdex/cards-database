import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-92",
	localId: 92,

	// Card informations
	name: {
		en: "G Booster",
		fr: "Impulsion G",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/92/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/92/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/92/high",
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
			fr: "Le Genesect-EX auquel cette carte est attachée peut aussi utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			fr: "Impulsion G",
		},
		text: {
			fr: "Défaussez 2 Énergies attachées à ce Pokémon. Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Défenseur.",
		},
		damage: 200
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
