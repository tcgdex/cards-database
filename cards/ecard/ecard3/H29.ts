import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H29",
	localId: "H29",

	// Card informations
	name: {
		en: "Steelix",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 208,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H29/high",
		},
	},

	evolveFrom: {
		en: "Onix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 74,
		name: "Hikaru Koike"
	},

	abilities: [{
		id: 463,
		type: AbilityType.POKEBODY,
		name: {
			en: "Rare Metal",
		},
		text: {
			en: "All basic Energy cards attached to Steelix provide Metal Energy instead of their usual types.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Squeeze",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Metal Tail",
		},
		text: {
			en: "Before doing damage, you may flip a coin. If heads, this attack does 80 damage. If tails, this attack does nothing.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
