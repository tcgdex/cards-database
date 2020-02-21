import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-109",
	localId: 109,

	// Card informations
	name: {
		en: "PlusPower",
		fr: "PlusPower",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/109/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/109/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/109/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Attachez PlusPower  à 1 de vos Pokémon. Défaussez cette carte à la fin de votre tour. Si le Pokémon auquel PlusPower est attachée attaque, cette attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
