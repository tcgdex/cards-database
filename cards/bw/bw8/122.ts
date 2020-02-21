import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée est un Pokémon de base, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
