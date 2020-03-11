import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-58",
	localId: 58,

	// Card informations
	name: {
		en: "Nidoking",
		fr: "Nidoking",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 34,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/58/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/58/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/58/high",
		},
	},

	evolveFrom: {
		en: "Nidorino",
		fr: "Nidorino",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lovestrike",
			fr: "Coup de Foudre",
		},
		text: {
			en: "Does 40 more damage for each Nidoqueen on your Bench.",
			fr: "Inflige 40 dégâts supplémentaires pour chaque Nidoqueen sur votre Banc.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Drill",
			fr: "Empal'Korne",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
