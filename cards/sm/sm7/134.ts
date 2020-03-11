import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-134",
	localId: 134,

	// Card informations
	name: {
		en: "Hustle Belt",
		fr: "Ceinture Agitée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/134/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/134/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/134/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/134/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Yoshinobu Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée a 30 PV ou moins et a déjà des marqueurs de dégâts, ses attaques infligent 60 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
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
