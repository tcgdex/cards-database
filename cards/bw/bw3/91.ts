import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-91",
	localId: 91,

	// Card informations
	name: {
		en: "Eviolite",
		fr: "Évoluroc",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/91/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/91/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/91/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
		Tag.TOOL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée est un Pokémon de base, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
	},{
		name: {},
		text: {
			fr: "Attachez un Outil Pokémon à 1 de vos Pokémon auquel un Outil Pokémon n'est pas déjà attaché.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card

