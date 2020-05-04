import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-4",
	localId: 4,

	// Card informations
	name: {
		en: "Kabutops",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 141,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/4/high",
		},
	},

	evolveFrom: {
		en: "Kabuto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Primal Scythe",
		},
		text: {
			en: "You may discard Helix Fossil, Dome Fossil, or Old Amber from your hand. If you do, this attack does 20 damage plus 50 more damage.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Slide",
		},
		text: {
			en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
