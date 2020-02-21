import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-148",
	localId: 148,

	// Card informations
	name: {
		en: "Tate & Liza",
		fr: "Lévy et Tatia",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/148/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/148/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/148/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/148/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l’une de ces options :\n\n• Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.\n• Échangez votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
