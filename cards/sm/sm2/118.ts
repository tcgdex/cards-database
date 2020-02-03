import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-118",
	localId: 118,

	// Card informations
	name: {
		en: "Altar of the Sunne",
		fr: "Autel du Soleil",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/118/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/118/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/118/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/118/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Les Pokémon Fire et les Pokémon Metal (les vôtres et ceux de votre adversaire) n’ont pas de Faiblesse.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

