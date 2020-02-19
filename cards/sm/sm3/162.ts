import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-162",
	localId: 162,

	// Card informations
	name: {
		en: "Choice Band",
		fr: "Bandeau Choix",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/162/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/162/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/162/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/162/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Les attaques du Pokémon auquel cette carte est attachée infligent 30 dégâts supplémentaires au Pokémon-GX Actif ou au Pokémon-EX Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

