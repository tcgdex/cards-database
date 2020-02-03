import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-135",
	localId: 135,

	// Card informations
	name: {
		en: "Brock's Grit",
		fr: "Vaillance de Pierre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/135/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/135/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/135/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/135/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une combinaison de 6 cartes Pokémon et cartes Énergie de base dans votre pile de défausse et mélangez-les avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

