import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



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
