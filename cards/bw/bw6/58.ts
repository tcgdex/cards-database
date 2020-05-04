import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-58",
	localId: 58,

	// Card informations
	name: {
		en: "Golett",
		fr: "Gringolem",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 622,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/58/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/58/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Nap",
			fr: "Tit'Sieste",
		},
		text: {
			en: "Heal 40 damage from this Pokémon.",
			fr: "Soignez 40 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras'Face",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
