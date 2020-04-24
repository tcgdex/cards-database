import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM196",
	localId: "SM196",

	// Card informations
	name: {
		en: "Mewtwo-GX",
	},

	hp: 190,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,


	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "MPC Film",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Telekinesis",
		},
		text: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. This damage isn't affected by Weakness or Resistance.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reigning Pulse",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
		},
		damage: 120
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Nova-GX",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks during your opponent's next turn. (You can't use more than 1 GX attack in a game.)",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
