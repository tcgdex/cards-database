import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-11",
	localId: 11,

	// Card informations
	name: {
		en: "Lumineon",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 457,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/11/high",
		},
	},

	evolveFrom: {
		en: "Finneon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 519,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Lure Ring",
		},
		text: {
			en: "Once during your turn (before your attack), if Lumineon is your Active Pokémon, you may choose 1 of your opponent's Benched Pokémon that has maximum HP of 100 or more and switch it with 1 of the Defending Pokémon. This power can't be used if Lumineon is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reverse Stream",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each Water Energy attached to Lumineon. Then, return all Water Energy attached to Lumineon to your hand.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
