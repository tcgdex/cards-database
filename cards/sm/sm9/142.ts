import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-142",
	localId: 142,

	// Card informations
	name: {
		en: "Fairy Charm UB",
		fr: "Amulette Féerique UC",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/142/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/142/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/142/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/142/high",
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
			fr: "Évitez tous les dégâts infligés au Pokémon Fairy auquel cette carte est attachée par les attaques des Pokémon-GX Ultra-Chimères ou des Pokémon-{EX} Ultra-Chimères de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
