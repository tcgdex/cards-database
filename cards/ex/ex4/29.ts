import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-29",
	localId: 29,

	// Card informations
	name: {
		en: "Team Aqua's Manectric",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 310,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/29/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 153,
		name: "K. Utsunomiya"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Beam",
		},
		text: {
			en: "If the Defending Pokémon has Team Magma's in its name, the Defending Pokémon is now Confused.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Chaos Crush",
		},
		text: {
			en: "If the Defending Pokémon is Confused, discard an Energy card attached to the Defending Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
