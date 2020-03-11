import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-106",
	localId: 106,

	// Card informations
	name: {
		en: "Bidoof",
		fr: "Keunotor",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 399,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/106/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/106/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bang Heads",
			fr: "Choc Frontal",
		},
		text: {
			en: "Both this Pokémon and the Defending Pokémon are now Confused.",
			fr: "Ce Pokémon et le Pokémon Défenseur sont maintenant Confus.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
