import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-48",
	localId: 48,

	// Card informations
	name: {
		en: "Parasect",
		fr: "Parasect",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 47,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/48/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/48/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/48/high",
		},
	},

	evolveFrom: {
		en: "Paras",
		fr: "Paras",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sleep Drain",
			fr: "Aspirododo",
		},
		text: {
			en: "The Defending Pokémon is now Asleep. Remove 4 damage counters from Parasect.",
			fr: "Le Pokémon Défenseur est maintenant Endormi. Retirez 4 marqueurs de dégâts de Parasect.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
