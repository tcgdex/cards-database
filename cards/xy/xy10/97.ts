import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-97",
	localId: 97,

	// Card informations
	name: {
		en: "Energy Pouch",
		fr: "Sacoche d'Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/97/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/97/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/97/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/97/high.png",
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
			fr: "Si le Pokémon auquel cette carte est attachée est mis K.O. par les dégâts d'une attaque de votre adversaire, placez toutes les Énergies de base lui étant attachées dans votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

