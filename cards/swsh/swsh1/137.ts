import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-137",
	localId: 137,

	// Card informations
	name: {
		en: "Copperajah",
		fr: "Pachyradjah",
	},

	hp: 190,

	type: [
		Type.METAL,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/137/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/137/low",
		}
	},

	evolveFrom: {
		en: "Cufant",
		fr: "Charibari",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Dig Drain",
			fr: "Trou Épuisant",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
		},
		damage: 60
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Muscular Nose",
			fr: "Nez Musclé",
		},
		text: {
			en: "If this Pokémon has 8 or more damage counters on it, this attack does nothing.",
			fr: "Si ce Pokémon a au moins 8 marqueurs de dégâts, cette attaque ne fait rien.",
		},
		damage: 220
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],

	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
