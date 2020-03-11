import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-86",
	localId: 86,

	// Card informations
	name: {
		en: "Reversal Trigger",
		fr: "Déclencheur Inversé",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/86/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/86/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Lorsque le Pokémon de la Team Plasma auquel cette carte est attachée est mis K.O. par les dégâts d'une attaque de votre adversaire, cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
