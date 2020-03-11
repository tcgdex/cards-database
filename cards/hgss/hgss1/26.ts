import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-26",
	localId: 26,

	// Card informations
	name: {
		en: "Meganium",
		fr: "Meganium",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 154,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/26/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/26/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/26/high",
		},
	},

	evolveFrom: {
		en: "Bayleef",
		fr: "Macronium",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sleep Powder",
			fr: "Poudre dodo",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giant Bloom",
			fr: "Pousse géante",
		},
		text: {
			en: "Remove 2 damage counters from Meganium.",
			fr: "Retirez 2 marqueurs de dégâts de Meganium.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
