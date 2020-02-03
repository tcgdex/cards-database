import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-124",
	localId: 124,

	// Card informations
	name: {
		en: "Poison Barb",
		fr: "Pic Venin",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/124/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/124/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/124/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/124/high.png",
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
			fr: "Si le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si le Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

