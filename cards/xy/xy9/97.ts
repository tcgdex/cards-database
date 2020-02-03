import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-97",
	localId: 97,

	// Card informations
	name: {
		en: "Bursting Balloon",
		fr: "Ballon Explosif",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/97/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/97/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/97/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/97/high.png",
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
			fr: "Si cette carte est attachée à l'un de vos Pokémon, défaussez-la à la fin du tour de votre adversaire.\n\nSi le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si le Pokémon est mis K.O.), placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
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

