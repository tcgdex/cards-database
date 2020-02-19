import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H7/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H7/high.png",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},

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

