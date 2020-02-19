import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-177",
	localId: 177,

	// Card informations
	name: {
		en: "Fairy Charm Dragon",
		fr: "Amulette Féerique Dragon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/177/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/177/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/177/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/177/high.png",
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
			fr: "Évitez tous les dégâts infligés au Pokémon Fairy auquel cette carte est attachée par les attaques des Pokémon-GX Dragon ou Pokémon-EX Dragon de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

