import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-118",
	localId: 118,

	// Card informations
	name: {
		en: "Blend Energy WaterLightningFightingMetal",
		fr: "Énergie Amalgamée WaterLightningFightingMetal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/118/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/118/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/118/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l'Énergie Colorless. Lorsque cette carte est attachée à un Pokémon, cette carte fournit de l'Énergie Water, Lightning, Fighting ou Metal mais ne fournit qu'une Énergie à la fois.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
