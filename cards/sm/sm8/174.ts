import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-174",
	localId: 174,

	// Card informations
	name: {
		en: "Fairy Charm Grass",
		fr: "Amulette Féerique Grass",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/174/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/174/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/174/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/174/high.png",
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
			fr: "Évitez tous les dégâts infligés au Pokémon Fairy auquel cette carte est attachée par les attaques des Pokémon-GX Grass ou Pokémon-EX Grass de votre adversaire.",
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

