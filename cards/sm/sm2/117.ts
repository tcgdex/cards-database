import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-117",
	localId: 117,

	// Card informations
	name: {
		en: "Altar of the Moone",
		fr: "Autel de la Lune",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/117/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/117/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/117/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Le Coût de Retraite de chaque Pokémon (les vôtres et ceux de votre adversaire) auquel de l’Énergie Psychic ou Darkness est attachée est diminué de ColorlessColorless.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
