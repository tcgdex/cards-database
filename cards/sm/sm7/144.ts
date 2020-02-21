import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-144",
	localId: 144,

	// Card informations
	name: {
		en: "Sky Pillar",
		fr: "Pilier Céleste",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/144/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/144/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/144/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/144/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Évitez tous les effets des attaques de votre adversaire, y compris les dégâts, infligés aux Pokémon de Banc (les vôtres et ceux de votre adversaire).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
