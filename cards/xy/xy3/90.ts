import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-90",
	localId: 90,

	// Card informations
	name: {
		en: "Fighting Stadium",
		fr: "Stade des Combats",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/90/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/90/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/90/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/90/high.png",
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
			fr: "Les attaques de chaque Pokémon Fighting en jeu (les vôtres et ceux de votre adversaire) infligent 20 dégâts supplémentaires aux Pokémon-EX Défenseurs (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card

