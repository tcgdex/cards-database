import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-60",
	localId: 60,

	// Card informations
	name: {
		en: "Magnezone",
		fr: "Magnézone",
	},

	hp: 160,

	type: [
		Type.LIGHTNING,
	],

	dexId: 462,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/60/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/60/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/60/high",
		},
	},

	evolveFrom: {
		en: "Magneton",
		fr: "Magnéton",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shin Nagasawa",

	abilities: [{
		id: 771,
		type: AbilityType.TALENT,
		name: {
			en: "Double Type",
			fr: "Type Double",
		},
		text: {
			en: "As long as this Pokémon is in play, it is Lightning and Metal type.",
			fr: "Tant que ce Pokémon est en jeu, il est de type Lightning et Metal.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magnetic Bolt",
			fr: "Foudre Aimantée",
		},
		text: {
			en: "Put a Trainer card from your discard pile into your hand.",
			fr: "Ajoutez une carte Dresseur de votre pile de défausse à votre main.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
