import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-187",
	localId: 187,

	// Card informations
	name: {
		en: "Blizzard Town",
		fr: "Blizzarville",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/187/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/187/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/187/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/187/high.png",
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
			fr: "Les Pokémon auxquels il reste 40 PV ou moins (les vôtres et ceux de votre adversaire) ne peuvent pas attaquer.",
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

