import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-100",
	localId: 100,

	// Card informations
	name: {
		en: "Vileplume ex",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 45,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/100/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 1036,
		type: AbilityType.POKEBODY,
		name: {
			en: "Block Dust",
		},
		text: {
			en: "As long as Vileplume ex is your Active Pokémon, your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Special Formula",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep and Poisoned. If tails, the Defending Pokémon is now Confused.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
