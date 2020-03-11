import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-15",
	localId: 15,

	// Card informations
	name: {
		en: "Arcanine",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 59,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/15/high",
		},
	},

	evolveFrom: {
		en: "Growlithe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 283,
		type: AbilityType.POKEBODY,
		name: {
			en: "Fire Veil",
		},
		text: {
			en: "If Arcanine is your Active Pokémon and is damaged by an opponent's attack (even if Arcanine is Knocked Out), the Attacking Pokémon is now Burned.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Burn Up",
		},
		text: {
			en: "Flip a coin. If tails, discard all Fire Energy cards attached to Arcanine.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
