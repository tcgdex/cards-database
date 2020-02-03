import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-105",
	localId: 105,

	// Card informations
	name: {
		en: "Steel Shelter",
		fr: "Bunker d'Acier",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/105/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/105/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/105/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/105/high.png",
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
			fr: "Chaque Pokémon Metal (les vôtres et ceux de votre adversaire) ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant les Pokémon concernés.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card

