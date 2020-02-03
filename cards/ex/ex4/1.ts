import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-1",
	localId: 1,

	// Card informations
	name: {
		en: "Team Aqua's Cacturne",
	},

	hp: 80,

	type: [
		Type.GRASS,
		Type.DARKNESS,
	],

	dexId: 332,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/1/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/1/high.png",
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
			Type.DARKNESS
		],
		name: {
			en: "Dark Bind",
		},
		text: {
			en: "You may discard a Darkness Energy card attached to Team Aqua's Cacturne. If you do, the Defending Pokémon is now Paralyzed.\"",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Barb",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card

