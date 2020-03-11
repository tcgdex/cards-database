import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H7",
	localId: "H7",

	// Card informations
	name: {
		en: "Flareon",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 136,


	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kyoko Umemoto",

	abilities: [{
		id: 431,
		type: AbilityType.POKEBODY,
		name: {
			en: "Self Healing",
		},
		text: {
			en: "Whenever you attach a Fire Energy card from your hand to Flareon, remove all Special Conditions affecting Flareon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Singe",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Burn Booster",
		},
		text: {
			en: "Discard an Energy card attached to Flareon in order to use this attack. If the discarded card is a Energy card, this attack does 40 damage plus 10 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
