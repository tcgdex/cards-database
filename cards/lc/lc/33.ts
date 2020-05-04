import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "lc-33",
	localId: 33,

	// Card informations
	name: {
		en: "Pidgeot",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 18,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/lc/lc/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/lc/lc/33/high",
		},
	},

	evolveFrom: {
		en: "Pidgeotto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hurricane",
		},
		text: {
			en: "Unless this attack Knocks Out the Defending Pokémon, return the Defending Pokémon and all cards attached to it to your opponent's hand.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "lc"
	}
}

export default card
