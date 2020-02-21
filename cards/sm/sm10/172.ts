import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-172",
	localId: 172,

	// Card informations
	name: {
		en: "Fairy Charm Lightning",
		fr: "Amulette Féerique Lightning",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/172/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/172/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/172/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/172/high",
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
			fr: "Évitez tous les dégâts infligés au Pokémon Fairy auquel cette carte est attachée par les attaques des Pokémon-GX Lightning ou Pokémon-EX Lightning de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
