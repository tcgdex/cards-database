import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-205",
	localId: 205,

	// Card informations
	name: {
		en: "Pokémon Research Lab",
		fr: "Laboratoire Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/205/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/205/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/205/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/205/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 149,
		name: "aky CG Works"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut chercher dans son deck jusqu’à 2 Pokémon qui évoluent de Fossile Inconnu, les placer sur son Banc, puis mélanger son deck. Si un joueur cherche son deck de cette façon, son tour se termine.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

