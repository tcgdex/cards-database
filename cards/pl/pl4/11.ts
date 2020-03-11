import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-11",
	localId: 11,

	// Card informations
	name: {
		en: "Toxicroak",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 454,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/11/high",
		},
	},

	evolveFrom: {
		en: "Croagunk",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Corner",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Convert Blow",
		},
		text: {
			en: "If Toxicroak has any Psychic Energy attached to it, the Defending Pokémon is now Poisoned. If Toxicroak has any Fighting Energy attached to it, this attack does 30 damage plus 30 more damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
