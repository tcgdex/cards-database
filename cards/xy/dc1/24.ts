import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-24",
	localId: 24,

	// Card informations
	name: {
		en: "Magma Pointer",
		fr: "Pointeur Magma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/24/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/24/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/24/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/24/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Le Pokémon de la Team Magma auquel cette carte est attachée peut aussi utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		},
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			fr: "Pointeur Magma",
		},
		text: {
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
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

