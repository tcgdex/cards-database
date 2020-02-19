import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-77",
	localId: 77,

	// Card informations
	name: {
		en: "Lucky Helmet",
		fr: "Casque Chance",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/77/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/77/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/77/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Chaque fois que le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si le Pokémon est mis K.O.), piochez 2 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

