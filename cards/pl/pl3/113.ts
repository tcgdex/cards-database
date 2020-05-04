import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-113",
	localId: 113,

	// Card informations
	name: {
		en: "Meditite",
		fr: "Meditikka",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 307,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/113/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/113/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/113/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Psyshot",
			fr: "Piqûre psy",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Karate Chop",
			fr: "Poing-Karaté",
		},
		text: {
			en: "Does 30 damage minus 10 damage for each damage counter on Meditite.",
			fr: "Inflige 30 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Meditikka.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
