import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw10/92/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/92/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/92/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/92/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



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







	rarity: Rarity.RareACE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

