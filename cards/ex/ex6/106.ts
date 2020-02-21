import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-106",
	localId: 106,

	// Card informations
	name: {
		en: "Clefable ex",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 36,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/106/high",
		},
	},

	evolveFrom: {
		en: "Clefairy",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metronome",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. Metronome copies that attack except for its Energy cost. (You must still do anything else in order to use that attack.) (No matter what type that Pokémon is, Clefable ex's type is still Colorless.) Clefable ex performs that attack. \"",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Moon Impact",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
