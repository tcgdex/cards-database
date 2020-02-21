import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-113",
	localId: 113,

	// Card informations
	name: {
		en: "Splash Energy",
		fr: "Énergie Éclaboussure",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/113/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/113/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/113/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte ne peut être attachée qu'à un Pokémon Water. Cette carte ne fournit de l'Énergie Water que pendant qu'elle est attachée à un Pokémon Water.\n\nSi le Pokémon Water auquel cette carte est attachée est mis K.O. par les dégâts d'une attaque de votre adversaire, placez le Pokémon dans votre main. (Défaussez toutes les cartes lui étant attachées.)\n\n(Si cette carte est attachée à autre chose qu'un Pokémon Water, défaussez cette carte.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
