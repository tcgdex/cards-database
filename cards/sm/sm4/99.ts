import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-99",
	localId: 99,

	// Card informations
	name: {
		en: "Sea of Nothingness",
		fr: "Océan du Néant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/99/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/99/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/99/high",
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
			fr: "Les États Spéciaux ne sont pas retirés lorsque les Pokémon (les vôtres et ceux de votre adversaire) évoluent ou dés-évoluent.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
