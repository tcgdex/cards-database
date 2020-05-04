import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Butterfree",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 12,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/5/high",
		},
	},

	evolveFrom: {
		en: "Metapod",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Sumiyoshi Kizuki",

	abilities: [{
		id: 250,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Miraculous Powder",
		},
		text: {
			en: "Once during your turn (before you attack), you may remove all Special Conditions from your Active Pokémon. This power can't be used if Butterfree is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Drain",
		},
		text: {
			en: "Flip a coin. If heads, remove 2 damage counters from Butterfree.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
