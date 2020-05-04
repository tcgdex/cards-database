import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-35",
	localId: 35,

	// Card informations
	name: {
		en: "Dark Golduck",
	},

	hp: 70,

	type: [
		Type.WATER,
		Type.DARKNESS,
	],

	dexId: 55,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/35/high",
		},
	},

	evolveFrom: {
		en: "Psyduck",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Nakaoka",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Shield",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to each of your Active Pokémon during your opponent's next turn.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cold Crush",
		},
		text: {
			en: "You may discard an Energy card attached to Dark Golduck. If you do, discard an Energy attached to the Defending Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
