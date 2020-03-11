import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop1-16",
	localId: 16,

	// Card informations
	name: {
		en: "Armaldo ex",
	},

	hp: 160,

	type: [
		Type.FIGHTING,
	],

	dexId: 348,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop1/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop1/16/high",
		},
	},

	evolveFrom: {
		en: "Anorith",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hikaru Koike",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Twin Blade",
		},
		text: {
			en: "Does 30 damage to each Defending Pokémon.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Supersonic Claws",
		},
		text: {
			en: "This attack's damage is not affected by Resistance.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	},{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 1",
		code: "pop1"
	}
}

export default card
