import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-9",
	localId: 9,

	// Card informations
	name: {
		en: "Kabutops δ",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 141,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/9/high",
		},
	},

	evolveFrom: {
		en: "Kabuto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Vital Drain",
		},
		text: {
			en: "If the Defending Pokémon is Knocked Out by this attack, remove all Special Conditions and 7 damage counters from Kabutops (all if there are less than 7).",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunderous Blow",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each Lightning Energy attached to Kabutops.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
