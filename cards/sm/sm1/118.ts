import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-118",
	localId: 118,

	// Card informations
	name: {
		en: "Exp. Share",
		fr: "Multi Exp",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/118/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/118/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/118/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Lorsque votre Pokémon Actif est mis K.O. par les dégâts d’une attaque de votre adversaire, vous pouvez déplacer 1 carte d’Énergie de base de ce Pokémon vers le Pokémon auquel cette carte est attachée.",
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
