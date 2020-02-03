import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy9/99/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/99/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/99/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/99/high.png",
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
			fr: "Ajoutez 40 PV au Pokémon de base auquel cette carte est attachée et ses attaques infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card

