import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-185",
	localId: 185,

	// Card informations
	name: {
		en: "Beastite",
		fr: "Chimérite",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/185/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/185/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/185/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/185/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 199,
		name: "inose yukie"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Les attaques de l’Ultra-Chimère à laquelle cette carte est attachée infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire pour chaque carte Récompense que vous avez récupérée (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

