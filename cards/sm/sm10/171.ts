import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-171",
	localId: 171,

	// Card informations
	name: {
		en: "Fairy Charm Ability",
		fr: "Amulette Féerique Talent",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/171/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/171/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/171/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/171/high.png",
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
			fr: "Évitez tous les dégâts infligés au Pokémon Fairy auquel cette carte est attachée par les attaques des Pokémon-GX ou Pokémon-EX de votre adversaire qui ont un talent.",
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

