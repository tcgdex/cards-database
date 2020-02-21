import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-130",
	localId: 130,

	// Card informations
	name: {
		en: "Rescue Stretcher",
		fr: "Civière",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/130/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/130/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/130/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/130/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l’une de ces options :\n\n•Ajoutez un Pokémon de votre pile de défausse à votre main.\n•Mélangez 3 Pokémon de votre pile de défausse avec votre deck.",
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
